/* ==========================================================================
   i18n 헬퍼 — 이 파일은 수정할 일이 거의 없습니다.
   텍스트 편집은 src/i18n/ui.ts 에서 하세요.
   ========================================================================== */
import { ui, type UIKey } from './ui';

export type Lang = 'ko' | 'en';
export const defaultLang: Lang = 'ko';
export const languages: Record<Lang, string> = { ko: 'KO', en: 'EN' };

/** URL에서 현재 언어를 읽습니다. (/en/... → 'en', 그 외 → 'ko') */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first === 'en' ? 'en' : 'ko';
}

/** 페이지/컴포넌트에서: const t = useTranslations(lang); t('nav.home') */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[key][lang];
  };
}

/** 언어 접두어를 제거한 순수 경로 (/en/about → /about) */
export function stripLang(pathname: string): string {
  const p = pathname.replace(/\/+$/, '') || '/';
  if (p === '/en') return '/';
  if (p.startsWith('/en/')) return p.slice(3);
  return p;
}

/** 순수 경로 + 언어 → 실제 링크 (/about, 'en' → /en/about) */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'en') return clean === '/' ? '/en/' : `/en${clean}`;
  return clean;
}
