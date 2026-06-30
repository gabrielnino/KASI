export type Locale = 'en' | 'es' | 'zh' | 'pa';

export const defaultLocale: Locale = 'en';

export function getLocaleFromUrl(url: URL): Locale {
  const pathname = url.pathname;
  const parts = pathname.split('/').filter(Boolean);
  const firstPart = parts[0];
  
  if (firstPart === 'es' || firstPart === 'zh' || firstPart === 'pa') {
    return firstPart as Locale;
  }
  return defaultLocale;
}

export function getLocalizedPath(path: string, locale: Locale): string {
  // Normalize path
  let cleanPath = path;
  if (!cleanPath.startsWith('/')) {
    cleanPath = `/${cleanPath}`;
  }
  
  // Remove existing locale prefix if any
  const parts = cleanPath.split('/').filter(Boolean);
  if (parts[0] === 'es' || parts[0] === 'zh' || parts[0] === 'pa') {
    parts.shift();
  }
  
  const basePath = '/' + parts.join('/');
  
  if (locale === defaultLocale) {
    return basePath;
  }
  return `/${locale}${basePath === '/' ? '' : basePath}`;
}

import { translations } from './translations';

export function useTranslations(locale: Locale) {
  return function t(key: string): any {
    const keys = key.split('.');
    let current: any = translations[locale];
    for (const k of keys) {
      if (current && current[k] !== undefined) {
        current = current[k];
      } else {
        // Fallback to English
        let fallback: any = translations[defaultLocale];
        for (const fk of keys) {
          if (fallback && fallback[fk] !== undefined) {
            fallback = fallback[fk];
          } else {
            return key;
          }
        }
        return fallback;
      }
    }
    return current;
  };
}
