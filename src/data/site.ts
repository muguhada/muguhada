/* ==========================================================================
   site.ts — 사이트 공통 설정 ✏️
   브랜드명, 로고, 히어로 이미지(PC/모바일), 연락 정보를 여기서 관리
   ========================================================================== */

export const site = {
  brandName: '결',
  brandLatin: 'GYEOL',

  /* 헤더 로고 — 파일 3개를 src/assets/brand/ 에서 교체하세요.
       logo-mark.svg    : 1×1 정사각 심볼
       wordmark-ko.svg  : 가로형 한글 워드마크 (한국어 페이지에 표시)
       wordmark-en.svg  : 가로형 영문 워드마크 (영어 페이지에 표시)
     SVG 안 fill="currentColor" 를 유지하면 투명 헤더(밝은 색)↔스크롤 후
     (어두운 색)를 자동으로 따라갑니다. 고유 색 로고라면 원래 fill 그대로. */
  headerTextLogo: false, // true 로 바꾸면 워드마크 대신 예전 텍스트 로고 표시

  /* 히어로 이미지 — 768px 이상 화면 → heroDesktop, 그 미만 → heroMobile */
  heroDesktop: '/assets/hero-desktop.webp',
  heroMobile: '/assets/hero-mobile.webp',

  /* 연락 정보 */
  email: 'hello@gyeol.example',
  instagramHandle: '@gyeol.studio',
  instagramUrl: 'https://instagram.com/',
};
