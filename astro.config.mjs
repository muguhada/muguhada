// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // ✏️ 실제 도메인 연결 후 변경하세요 (hreflang/sitemap에 사용)
  site: 'https://example.com',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
    routing: {
      prefixDefaultLocale: false, // 한국어 = / , 영어 = /en/
    },
  },
});
