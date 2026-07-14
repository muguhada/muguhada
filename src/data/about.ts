/* ==========================================================================
   about.ts — 브랜드 소개 페이지의 반복 콘텐츠 ✏️
   원칙(순서 없음) / 제작 과정(순서 있음 — 번호는 자동 표시)
   ========================================================================== */

type L10n = { ko: string; en: string };

export const values: { title: L10n; desc: L10n }[] = [
  {
    title: { ko: '쓰임이 먼저', en: 'Use comes first' },
    desc: {
      ko: '보기 좋은 형태보다 잡기 좋은 형태를 먼저 찾습니다. 무게, 굽 높이, 입술 두께를 손에 맞춥니다.',
      en: 'We look for forms that hold well before forms that look good — weight, foot height, and lip thickness are tuned to the hand.',
    },
  },
  {
    title: { ko: '재료의 정직함', en: 'Honest materials' },
    desc: {
      ko: '국내산 백자토와 분청토, 직접 조합한 유약만 사용합니다. 재료 정보는 제품마다 표기합니다.',
      en: 'Only Korean porcelain and buncheong clay, with glazes we mix ourselves. Materials are listed on every product.',
    },
  },
  {
    title: { ko: '고쳐 쓰는 문화', en: 'A culture of repair' },
    desc: {
      ko: '이가 나간 그릇은 킨츠기 수선으로 되살립니다. 구매 후 1년간 수선 비용의 절반을 부담합니다.',
      en: 'Chipped pieces are revived with kintsugi. For one year after purchase, we cover half the cost of repair.',
    },
  },
];

export const process: { title: L10n; desc: L10n }[] = [
  {
    title: { ko: '성형', en: 'Forming' },
    desc: {
      ko: '물레 또는 판 작업으로 형태를 잡고, 사흘에 걸쳐 천천히 말립니다.',
      en: 'Formed on the wheel or by slab, then dried slowly over three days.',
    },
  },
  {
    title: { ko: '초벌', en: 'Bisque firing' },
    desc: {
      ko: '800℃에서 한 번 구워 흙을 단단하게 만들고 표면을 정리합니다.',
      en: 'A first firing at 800°C hardens the clay and readies the surface.',
    },
  },
  {
    title: { ko: '시유', en: 'Glazing' },
    desc: {
      ko: '직접 조합한 유약을 입힙니다. 두께에 따라 색의 깊이가 달라집니다.',
      en: 'Glazes mixed in-house are applied; thickness changes the depth of the color.',
    },
  },
  {
    title: { ko: '재벌', en: 'Glaze firing' },
    desc: {
      ko: '1,250℃ 환원 소성으로 마무리합니다. 가마 문은 이틀 뒤에 엽니다.',
      en: 'Finished in a 1,250°C reduction firing. The kiln stays shut for two days.',
    },
  },
];
