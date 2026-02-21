import type { Locale } from './translations';

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith('/sv/') || pathname === '/sv') return 'sv';
  if (pathname.startsWith('/no/') || pathname === '/no') return 'no';
  return 'en';
}

export function getHomeUrl(locale: Locale): string {
  if (locale === 'en') return '/';
  return `/${locale}/`;
}

export function getAlternatePaths(pathname: string): Record<Locale, string> {
  // Strip locale prefix to get the base path
  const stripped = pathname
    .replace(/^\/(sv|no)\//, '/')
    .replace(/^\/(sv|no)$/, '/');

  return {
    en: stripped,
    sv: `/sv${stripped === '/' ? '/' : stripped}`,
    no: `/no${stripped === '/' ? '/' : stripped}`,
  };
}

export function getLocaleLabel(locale: Locale): string {
  switch (locale) {
    case 'en': return 'EN';
    case 'sv': return 'SV';
    case 'no': return 'NO';
  }
}

export const locales: Locale[] = ['en', 'sv', 'no'];
