/* ==========================================================================
   products.ts — 제품 목록 ✏️
   --------------------------------------------------------------------------
   · published: true  → 사이트에 노출됩니다.
   · published: false → 완전히 숨겨집니다. (확장 레이아웃 확인용 더미)
     → true 로 바꾸고 npm run dev 하면 그리드에 어떻게 놓이는지 볼 수 있어요.
   · 첫 번째 published 제품이 제품 페이지 상단 "대표 제품"으로 크게 노출되고,
     나머지 published 제품들은 그 아래 그리드에 나타납니다.
   ========================================================================== */

type L10n = { ko: string; en: string };

export interface ColorVariant {
  name: L10n;     // 짧은 컬러명 (화이트/블랙)
  finish?: L10n;  // 유약·마감 설명 (선택 — 있으면 컬러명 뒤에 함께 표시)
  swatch: string; // 스와치 버튼에 칠할 색 (CSS 색상값)
  image: string;  // public/assets/ 안의 이미지 경로
  alt: L10n;
  /* 3D 뷰어에서 이 컬러 선택 시 적용할 재질 (선택 — 없으면 swatch 색 사용)
     roughness 0=유광 ~ 1=완전 무광 */
  material?: { color: string; roughness?: number; metalness?: number };
}

export interface Product {
  published: boolean;
  name: L10n;
  desc: L10n;   // 대표 제품일 때 표시되는 상세 설명
  meta: L10n;   // 재료 · 크기 등 한 줄 스펙
  price: string;
  colors: ColorVariant[]; // 1개 이상 — 첫 번째가 기본 노출
  /* 3D 인터랙티브 뷰어 (선택) — 대표 제품일 때 이미지 대신 STL 모델 표시.
     이 필드를 지우면 기존처럼 이미지로 돌아갑니다.
     ⚠ public/ 에 올린 STL은 방문자가 다운로드할 수 있습니다 (README 참고) */
  model?: { stl: string };
}

export const products: Product[] = [
  /* ── 현재 판매 중 ─────────────────────────────────────────────────── */
  {
    published: true,
    name: { ko: '결 컵', en: 'Gyeol cup' },
    desc: {
      ko: '손잡이 없이 두 손으로 감싸 쥐는 컵입니다. 입술이 닿는 부분을 얇게 다듬어 커피와 차 어느 쪽에도 잘 맞습니다.',
      en: 'A handleless cup made to be held with both hands. The lip is finished thin, so it suits coffee and tea alike.',
    },
    meta: { ko: '백자토 · 350ml', en: 'Porcelain clay · 350ml' },
    price: '₩34,000',
    model: { stl: '/assets/product-sample.stl' }, // ✏️ 실제 STL로 교체 (지우면 이미지 표시)
    colors: [
      {
        name: { ko: '화이트', en: 'White' },
        finish: { ko: '무광 백자유', en: 'Matte glaze' },
        swatch: '#f0ede2',
        image: '/assets/product-white.svg',
        alt: { ko: '무광 백자유를 입힌 결 컵 화이트', en: 'The Gyeol cup in matte white' },
        material: { color: '#eae6da', roughness: 0.9 },
      },
      {
        name: { ko: '블랙', en: 'Black' },
        finish: { ko: '흑유', en: 'Dark glaze' },
        swatch: '#262924',
        image: '/assets/product-black.svg',
        alt: { ko: '흑유를 입힌 결 컵 블랙', en: 'The Gyeol cup in glossy black' },
        material: { color: '#22251f', roughness: 0.3 },
      },
    ],
  },

  /* ── 확장용 더미 (published: false — 사이트에 노출되지 않음) ─────────
     제품군이 늘어나면 이 형식 그대로 추가하면 됩니다. */
  {
    published: false,
    name: { ko: '넉넉한 면기', en: 'Generous noodle bowl' },
    desc: { ko: '설명을 입력하세요.', en: 'Add a description.' },
    meta: { ko: '분청토 · 재유 · 지름 19cm', en: 'Buncheong clay · Ash glaze · ⌀19cm' },
    price: '₩46,000',
    colors: [
      {
        name: { ko: '내추럴', en: 'Natural' },
        swatch: '#a3a08e',
        image: '/assets/product-02.svg',
        alt: { ko: '넉넉한 크기의 분청 면기', en: 'A wide buncheong noodle bowl' },
      },
    ],
  },
  {
    published: false,
    name: { ko: '모서리 접시', en: 'Rounded-corner plate' },
    desc: { ko: '설명을 입력하세요.', en: 'Add a description.' },
    meta: { ko: '백자토 · 무광 유약 · 21×21cm', en: 'Porcelain clay · Matte glaze · 21×21cm' },
    price: '₩39,000',
    colors: [
      {
        name: { ko: '화이트', en: 'White' },
        swatch: '#eceadf',
        image: '/assets/product-04.svg',
        alt: { ko: '모서리가 둥근 사각 접시', en: 'A square plate with rounded corners' },
      },
    ],
  },
  {
    published: false,
    name: { ko: '찬기 3종 세트', en: 'Side-dish set of 3' },
    desc: { ko: '설명을 입력하세요.', en: 'Add a description.' },
    meta: { ko: '분청토 · 재유 · 8/10/12cm', en: 'Buncheong clay · Ash glaze · 8/10/12cm' },
    price: '₩52,000',
    colors: [
      {
        name: { ko: '내추럴', en: 'Natural' },
        swatch: '#8d9884',
        image: '/assets/product-05.svg',
        alt: { ko: '크기가 다른 찬기 세 개 세트', en: 'Three side-dish bowls in graded sizes' },
      },
    ],
  },
];
