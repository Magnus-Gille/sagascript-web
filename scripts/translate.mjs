#!/usr/bin/env node

/**
 * Auto-translate English strings to Swedish and Norwegian.
 *
 * Usage: npm run translate
 *
 * Reads src/i18n/translations.ts, finds keys that are missing or identical
 * to their English counterparts in sv/no, translates them via an LLM API,
 * and writes the updated file back.
 *
 * Requires ANTHROPIC_API_KEY or OPENAI_API_KEY in environment.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TRANSLATIONS_PATH = resolve(__dirname, '../src/i18n/translations.ts');

const LOCALE_NAMES = {
  sv: 'Swedish',
  no: 'Norwegian Bokmål',
};

async function translateWithAnthropic(texts, targetLang) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error('ANTHROPIC_API_KEY not set');

  const prompt = `Translate the following English UI strings to ${targetLang}. Return ONLY a JSON object mapping each key to its translation. Keep the same keys. Do not translate brand names (Sagascript, WhisperKit, OpenAI, macOS, GitHub). Preserve any technical terms. Be natural and concise.\n\n${JSON.stringify(texts, null, 2)}`;

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4096,
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  if (!res.ok) throw new Error(`Anthropic API error: ${res.status} ${await res.text()}`);
  const data = await res.json();
  const text = data.content[0].text;

  // Extract JSON from response (may be wrapped in ```json blocks)
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error('No JSON found in API response');
  return JSON.parse(jsonMatch[0]);
}

async function translateWithOpenAI(texts, targetLang) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error('OPENAI_API_KEY not set');

  const prompt = `Translate the following English UI strings to ${targetLang}. Return ONLY a JSON object mapping each key to its translation. Keep the same keys. Do not translate brand names (Sagascript, WhisperKit, OpenAI, macOS, GitHub). Preserve any technical terms. Be natural and concise.\n\n${JSON.stringify(texts, null, 2)}`;

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
    }),
  });

  if (!res.ok) throw new Error(`OpenAI API error: ${res.status} ${await res.text()}`);
  const data = await res.json();
  const text = data.choices[0].message.content;

  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error('No JSON found in API response');
  return JSON.parse(jsonMatch[0]);
}

async function translate(texts, targetLang) {
  if (process.env.ANTHROPIC_API_KEY) {
    return translateWithAnthropic(texts, targetLang);
  }
  if (process.env.OPENAI_API_KEY) {
    return translateWithOpenAI(texts, targetLang);
  }
  throw new Error('Set ANTHROPIC_API_KEY or OPENAI_API_KEY to use auto-translation');
}

async function main() {
  // Dynamic import of the translations file
  const source = readFileSync(TRANSLATIONS_PATH, 'utf-8');

  // Parse the translations object from the TypeScript source
  // We extract each locale's object using regex (avoids needing ts compilation)
  function extractLocaleStrings(src, locale) {
    const regex = new RegExp(`${locale}:\\s*\\{([\\s\\S]*?)\\n  \\}`, 'm');
    const match = src.match(regex);
    if (!match) return {};

    const entries = {};
    const lines = match[1].split('\n');
    for (const line of lines) {
      const kv = line.match(/^\s*'([^']+)':\s*'((?:[^'\\]|\\.)*)'/);
      if (kv) entries[kv[1]] = kv[2].replace(/\\'/g, "'");
    }
    return entries;
  }

  const enStrings = extractLocaleStrings(source, 'en');
  const enKeys = Object.keys(enStrings);

  console.log(`Found ${enKeys.length} English keys`);

  for (const locale of ['sv', 'no']) {
    const existing = extractLocaleStrings(source, locale);
    const missing = {};

    for (const key of enKeys) {
      if (!existing[key]) {
        missing[key] = enStrings[key];
      }
    }

    const missingCount = Object.keys(missing).length;
    if (missingCount === 0) {
      console.log(`${locale}: all keys present, skipping`);
      continue;
    }

    console.log(`${locale}: ${missingCount} missing keys, translating...`);
    const translated = await translate(missing, LOCALE_NAMES[locale]);

    console.log(`${locale}: received ${Object.keys(translated).length} translations`);
    for (const [key, value] of Object.entries(translated)) {
      console.log(`  ${key}: ${value}`);
    }
  }

  console.log('\nDone. Review translations and update src/i18n/translations.ts manually if needed.');
}

main().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
