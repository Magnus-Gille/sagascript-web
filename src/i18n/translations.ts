export const translations = {
  en: {
    // Meta
    'meta.title': 'Sagascript — Private Voice Dictation for macOS',
    'meta.description': 'Lightweight macOS menu bar app for voice dictation. Press a hotkey, speak, text appears. Local transcription with WhisperKit — your voice never leaves your device.',

    // Nav
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.privacy': 'Privacy',
    'nav.download': 'Download',
    'nav.lang.aria': 'Switch language',

    // Hero
    'hero.headline': 'Dictate anywhere. Privately.',
    'hero.subhead': 'A lightweight macOS menu bar app. Press a hotkey, speak, and text appears in any application. Local transcription powered by WhisperKit — no cloud, no internet required.',
    'hero.cta.mac': 'Download for macOS',
    'hero.cta.windows': 'Windows — coming soon',

    // Features
    'features.title': 'Built for speed and privacy',
    'features.local.title': 'On-Device Transcription',
    'features.local.desc': 'Powered by WhisperKit. Your voice is processed entirely on your Mac — no internet connection needed, ever.',
    'features.everywhere.title': 'Works Everywhere',
    'features.everywhere.desc': 'Global hotkey works in any app. Press, speak, release — text appears where your cursor is.',
    'features.languages.title': 'English + Svenska',
    'features.languages.desc': 'Full support for English and Swedish transcription. Switch languages in settings, or let the model auto-detect.',
    'features.cloud.title': 'Cloud When You Choose',
    'features.cloud.desc': 'Optionally use OpenAI\'s API with your own key for maximum accuracy. Requires explicit opt-in — remote transcription is never the default.',

    // Privacy
    'privacy.title': 'Your voice stays yours.',
    'privacy.intro': 'Sagascript is built with a local-first architecture. Here\'s what that means in practice:',
    'privacy.audio.title': 'Audio never touches disk',
    'privacy.audio.desc': 'Voice data is processed in memory and immediately discarded after transcription. Nothing is written to disk, ever.',
    'privacy.network.title': 'Zero network traffic',
    'privacy.network.desc': 'In local mode, Sagascript makes absolutely no network requests. Fully offline, fully private.',
    'privacy.telemetry.title': 'No telemetry or tracking',
    'privacy.telemetry.desc': 'No analytics, no usage tracking, no data collection of any kind. The app doesn\'t phone home.',
    'privacy.keys.title': 'Encrypted credential storage',
    'privacy.keys.desc': 'If you choose to use the remote API, your key is stored in the macOS Keychain — encrypted at rest, tied to your device.',
    'privacy.optin.title': 'Remote is always opt-in',
    'privacy.optin.desc': 'Remote transcription requires you to explicitly enable it and provide your own API key. It\'s never on by default.',
    'privacy.permissions.title': 'Only 2 permissions',
    'privacy.permissions.desc': 'Microphone (to hear you) and Accessibility (to paste text). That\'s it. No Full Disk Access, no Location, no Camera.',
    'privacy.opensource': 'Don\'t take our word for it — review the source.',
    'privacy.github': 'View on GitHub',

    // Download
    'download.title': 'Get Sagascript',
    'download.mac.button': 'Download for macOS',
    'download.mac.requirements': 'Requires macOS 13.0+ (Apple Silicon)',
    'download.windows.title': 'Windows',
    'download.windows.status': 'Coming soon',

    // Support
    'support.charity': 'Sagascript is free to use, but if you found value in it, consider donating to',
    'support.charity.link': 'Save the Children',
    'support.coffee': 'If you already donated and still have some spare change,',
    'support.coffee.link': 'buy me a coffee',

    // Footer
    'footer.built': 'Built by',
    'footer.source': 'Source on GitHub',
  },

  sv: {
    'meta.title': 'Sagascript — Privat röstdiktering för macOS',
    'meta.description': 'Lättviktig macOS-app i menyraden för röstdiktering. Tryck på en snabbtangent, tala, text dyker upp. Lokal transkribering med WhisperKit — din röst lämnar aldrig din enhet.',

    'nav.home': 'Hem',
    'nav.features': 'Funktioner',
    'nav.privacy': 'Integritet',
    'nav.download': 'Ladda ner',
    'nav.lang.aria': 'Byt språk',

    'hero.headline': 'Diktera var som helst. Privat.',
    'hero.subhead': 'En lättviktig macOS-app i menyraden. Tryck på en snabbtangent, tala, och text dyker upp i valfri applikation. Lokal transkribering med WhisperKit — inget moln, ingen internetanslutning krävs.',
    'hero.cta.mac': 'Ladda ner för macOS',
    'hero.cta.windows': 'Windows — kommer snart',

    'features.title': 'Byggd för hastighet och integritet',
    'features.local.title': 'Transkribering på enheten',
    'features.local.desc': 'Drivs av WhisperKit. Din röst bearbetas helt på din Mac — ingen internetanslutning behövs, någonsin.',
    'features.everywhere.title': 'Fungerar överallt',
    'features.everywhere.desc': 'Global snabbtangent fungerar i alla appar. Tryck, tala, släpp — text dyker upp där markören är.',
    'features.languages.title': 'English + Svenska',
    'features.languages.desc': 'Fullt stöd för engelsk och svensk transkribering. Byt språk i inställningar, eller låt modellen auto-detektera.',
    'features.cloud.title': 'Moln när du väljer',
    'features.cloud.desc': 'Använd valfritt OpenAI:s API med din egen nyckel för maximal noggrannhet. Kräver uttryckligt godkännande — fjärrtranskribering är aldrig standard.',

    'privacy.title': 'Din röst förblir din.',
    'privacy.intro': 'Sagascript är byggt med en lokal-först-arkitektur. Så här fungerar det i praktiken:',
    'privacy.audio.title': 'Ljud rör aldrig disken',
    'privacy.audio.desc': 'Röstdata bearbetas i minnet och kasseras omedelbart efter transkribering. Inget skrivs till disk, någonsin.',
    'privacy.network.title': 'Noll nätverkstrafik',
    'privacy.network.desc': 'I lokalt läge gör Sagascript absolut inga nätverksförfrågningar. Helt offline, helt privat.',
    'privacy.telemetry.title': 'Ingen telemetri eller spårning',
    'privacy.telemetry.desc': 'Ingen analys, ingen användningsspårning, ingen datainsamling av något slag. Appen ringer aldrig hem.',
    'privacy.keys.title': 'Krypterad autentiseringslagring',
    'privacy.keys.desc': 'Om du väljer att använda fjärr-API:et lagras din nyckel i macOS Keychain — krypterad i vila, knuten till din enhet.',
    'privacy.optin.title': 'Fjärranslutning alltid frivilligt',
    'privacy.optin.desc': 'Fjärrtranskribering kräver att du uttryckligen aktiverar det och anger din egen API-nyckel. Det är aldrig aktiverat som standard.',
    'privacy.permissions.title': 'Bara 2 behörigheter',
    'privacy.permissions.desc': 'Mikrofon (för att höra dig) och Tillgänglighet (för att klistra in text). Det är allt. Ingen Full diskåtkomst, ingen Plats, ingen Kamera.',
    'privacy.opensource': 'Ta inte bara vårt ord för det — granska källkoden.',
    'privacy.github': 'Visa på GitHub',

    'download.title': 'Hämta Sagascript',
    'download.mac.button': 'Ladda ner för macOS',
    'download.mac.requirements': 'Kräver macOS 13.0+ (Apple Silicon)',
    'download.windows.title': 'Windows',
    'download.windows.status': 'Kommer snart',

    'support.charity': 'Sagascript är gratis att använda, men om du fann värde i det, överväg att donera till',
    'support.charity.link': 'Rädda Barnen',
    'support.coffee': 'Om du redan donerat och fortfarande har lite över,',
    'support.coffee.link': 'bjud mig på en kaffe',

    'footer.built': 'Byggd av',
    'footer.source': 'Källkod på GitHub',
  },

  no: {
    'meta.title': 'Sagascript — Privat talediktering for macOS',
    'meta.description': 'Lettvekts macOS-app i menylinjen for talediktering. Trykk en hurtigtast, snakk, tekst dukker opp. Lokal transkripsjon med WhisperKit — stemmen din forlater aldri enheten.',

    'nav.home': 'Hjem',
    'nav.features': 'Funksjoner',
    'nav.privacy': 'Personvern',
    'nav.download': 'Last ned',
    'nav.lang.aria': 'Bytt språk',

    'hero.headline': 'Dikter hvor som helst. Privat.',
    'hero.subhead': 'En lettvekts macOS-app i menylinjen. Trykk en hurtigtast, snakk, og tekst dukker opp i hvilken som helst applikasjon. Lokal transkripsjon med WhisperKit — ingen sky, ingen internettforbindelse nødvendig.',
    'hero.cta.mac': 'Last ned for macOS',
    'hero.cta.windows': 'Windows — kommer snart',

    'features.title': 'Bygget for hastighet og personvern',
    'features.local.title': 'Transkripsjon på enheten',
    'features.local.desc': 'Drevet av WhisperKit. Stemmen din behandles helt på din Mac — ingen internettforbindelse nødvendig, noensinne.',
    'features.everywhere.title': 'Fungerer overalt',
    'features.everywhere.desc': 'Global hurtigtast fungerer i alle apper. Trykk, snakk, slipp — tekst dukker opp der markøren er.',
    'features.languages.title': 'English + Svenska',
    'features.languages.desc': 'Full støtte for engelsk og svensk transkripsjon. Bytt språk i innstillinger, eller la modellen auto-detektere.',
    'features.cloud.title': 'Sky når du velger',
    'features.cloud.desc': 'Bruk valgfritt OpenAIs API med din egen nøkkel for maksimal nøyaktighet. Krever uttrykkelig samtykke — fjerntranskripsjon er aldri standard.',

    'privacy.title': 'Stemmen din forblir din.',
    'privacy.intro': 'Sagascript er bygget med en lokal-først-arkitektur. Slik fungerer det i praksis:',
    'privacy.audio.title': 'Lyd berører aldri disken',
    'privacy.audio.desc': 'Taledata behandles i minnet og forkastes umiddelbart etter transkripsjon. Ingenting skrives til disk, noensinne.',
    'privacy.network.title': 'Null nettverkstrafikk',
    'privacy.network.desc': 'I lokal modus gjør Sagascript absolutt ingen nettverksforespørsler. Helt frakoblet, helt privat.',
    'privacy.telemetry.title': 'Ingen telemetri eller sporing',
    'privacy.telemetry.desc': 'Ingen analyse, ingen brukssporing, ingen datainnsamling av noe slag. Appen ringer aldri hjem.',
    'privacy.keys.title': 'Kryptert legitimasjonslagring',
    'privacy.keys.desc': 'Hvis du velger å bruke fjern-API-et, lagres nøkkelen din i macOS Keychain — kryptert i hvile, knyttet til enheten din.',
    'privacy.optin.title': 'Fjernforbindelse alltid frivillig',
    'privacy.optin.desc': 'Fjerntranskripsjon krever at du uttrykkelig aktiverer det og oppgir din egen API-nøkkel. Det er aldri aktivert som standard.',
    'privacy.permissions.title': 'Bare 2 tillatelser',
    'privacy.permissions.desc': 'Mikrofon (for å høre deg) og Tilgjengelighet (for å lime inn tekst). Det er alt. Ingen Full disktilgang, ingen Posisjon, ingen Kamera.',
    'privacy.opensource': 'Ikke bare ta vårt ord for det — gjennomgå kildekoden.',
    'privacy.github': 'Vis på GitHub',

    'download.title': 'Hent Sagascript',
    'download.mac.button': 'Last ned for macOS',
    'download.mac.requirements': 'Krever macOS 13.0+ (Apple Silicon)',
    'download.windows.title': 'Windows',
    'download.windows.status': 'Kommer snart',

    'support.charity': 'Sagascript er gratis å bruke, men hvis du fant verdi i det, vurder å donere til',
    'support.charity.link': 'Redd Barna',
    'support.coffee': 'Hvis du allerede har donert og fortsatt har litt til overs,',
    'support.coffee.link': 'kjøp meg en kaffe',

    'footer.built': 'Bygget av',
    'footer.source': 'Kildekode på GitHub',
  },
} as const;

export type Locale = keyof typeof translations;
export type TranslationKey = keyof (typeof translations)['en'];

export function t(key: TranslationKey, locale: Locale = 'en'): string {
  return translations[locale][key] ?? translations['en'][key] ?? key;
}
