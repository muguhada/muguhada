/* ==========================================================================
   ui.ts — 사이트의 "모든 텍스트"가 이 파일에 있습니다. ✏️
   --------------------------------------------------------------------------
   각 항목마다 ko / en 이 나란히 있어 두 언어를 한 화면에서 편집합니다.
   문자열 안의 \n 은 화면에서 줄바꿈으로 표시됩니다. (pre-line)
   제품 목록·원칙·제작 과정 같은 "반복 카드형 콘텐츠"는 src/data/ 에 있습니다.
   ========================================================================== */

export const ui = {
  /* ── 내비게이션 ── */
  'nav.home':     { ko: '홈', en: 'Home' },
  'nav.about':    { ko: '브랜드 소개', en: 'About' },
  'nav.products': { ko: '제품', en: 'Products' },
  'nav.contact':  { ko: '연락처', en: 'Contact' },

  /* ── 접근성 라벨 ── */
  'a11y.skip':       { ko: '본문으로 바로가기', en: 'Skip to content' },
  'a11y.menuOpen':   { ko: '메뉴 열기', en: 'Open menu' },
  'a11y.mainMenu':   { ko: '주 메뉴', en: 'Main menu' },
  'a11y.footerMenu': { ko: '푸터 메뉴', en: 'Footer menu' },
  'a11y.lang':       { ko: '언어 선택', en: 'Select language' },

  /* ── 메타 (브라우저 탭 제목 / 검색 설명) ── */
  'meta.home.title': { ko: '결 GYEOL — 도자 스튜디오', en: 'Gyeol — Ceramic Studio' },
  'meta.home.desc': {
    ko: '매일의 식탁에 오르는 그릇을 빚는 도자 스튜디오 결. 브랜드 소개, 제품, 문의.',
    en: 'Gyeol is a ceramic studio making tableware for everyday meals. Brand story, products, and contact.',
  },
  'meta.about.title': { ko: '브랜드 소개 — 결 GYEOL', en: 'About — Gyeol' },
  'meta.about.desc': {
    ko: '도자 스튜디오 결이 그릇을 만드는 방식과 원칙을 소개합니다.',
    en: 'How ceramic studio Gyeol makes its ware, and the principles behind it.',
  },
  'meta.products.title': { ko: '제품 — 결 GYEOL', en: 'Products — Gyeol' },
  'meta.products.desc': {
    ko: '도자 스튜디오 결의 제품. 결 컵 — 화이트와 블랙 두 가지 색.',
    en: 'Gyeol products: the Gyeol cup, in white and in black.',
  },
  'meta.contact.title': { ko: '연락처 — 결 GYEOL', en: 'Contact — Gyeol' },
  'meta.contact.desc': {
    ko: '도자 스튜디오 결에 주문 제작, 입점·협업, 클래스 문의를 남겨주세요.',
    en: 'Reach Gyeol for custom orders, wholesale and collaboration, or class inquiries.',
  },

  /* ── 홈: 히어로 ── */
  'home.hero.eyebrow': { ko: '도자 스튜디오 결', en: 'CERAMIC STUDIO GYEOL' },
  'home.hero.title': {
    ko: '흙의 결을 읽고,\n쓰임을 빚습니다',
    en: 'We read the grain of clay\nand shape it for daily use',
  },
  'home.hero.alt': {
    ko: '가마에서 갓 꺼낸 그릇들이 놓인 작업대',
    en: 'A worktable of pots fresh from the kiln',
  },
  /* ── 홈: 브랜드 프리뷰 ── */
  'home.brand.eyebrow': { ko: '브랜드', en: 'Brand' },
  'home.brand.title': { ko: '작은 가마에서\n시작된 원칙', en: 'Principles that began\nat a small kiln' },
  'home.brand.body': {
    ko: '결은 2019년 문을 연 1인 도자 작업실에서 출발했습니다. 빠르게 만들 수 있는 방법보다, 오래 쓸 수 있는 방법을 먼저 묻습니다. 흙을 고르는 일부터 유약을 입히는 마지막 순간까지 한 사람의 손을 거칩니다.',
    en: 'Gyeol began in 2019 as a one-person pottery studio. Before asking how to make things faster, we ask how to make them last. From choosing the clay to the final coat of glaze, every piece passes through one pair of hands.',
  },
  'home.brand.link': { ko: '브랜드 이야기 보기', en: 'Read our story' },
  'home.brand.imgAlt': {
    ko: '물레 앞에서 기물을 성형하는 손',
    en: 'Hands shaping a vessel at the wheel',
  },

  /* ── 홈: 제품 프리뷰 ── */
  'home.products.eyebrow': { ko: '제품', en: 'Products' },
  'home.products.title': { ko: '손에 익는 기물들', en: 'Ware that fits the hand' },
  'home.products.lead': {
    ko: '지금은 단 하나의 컵을, 화이트와 블랙 두 가지 색으로 만듭니다.',
    en: 'Right now we make a single cup — in white, and in black.',
  },
  'home.products.link': { ko: '전체 제품 보기', en: 'View all products' },

  /* ── 홈: 연락처 CTA ── */
  'home.contact.eyebrow': { ko: '연락처', en: 'Contact' },
  'home.contact.title': { ko: '함께 만들 이야기가 있나요?', en: 'Have something to make together?' },
  'home.contact.body': {
    ko: '주문 제작, 입점·협업, 클래스 문의 모두 환영합니다. 영업일 기준 2일 안에 답장드립니다.',
    en: 'Custom orders, wholesale, collaboration, and class inquiries are all welcome. We reply within two business days.',
  },
  'home.contact.cta': { ko: '문의하기', en: 'Get in touch' },

  /* ── 브랜드 소개 페이지 ── */
  'about.head.eyebrow': { ko: '브랜드 소개', en: 'About' },
  'about.head.title': { ko: '느리게 만들어서\n오래 쓰는 그릇', en: 'Made slowly,\nused for years' },
  'about.head.lead': {
    ko: '결이 흙을 대하는 태도와 작업 방식에 대해 이야기합니다.',
    en: 'How Gyeol approaches clay, and how we work.',
  },
  'about.story.title': { ko: '작업실에서 식탁까지', en: 'From studio to table' },
  'about.story.p1': {
    ko: '결의 모든 기물은 한 작업실에서 성형되고, 같은 가마에서 구워집니다. 같은 형태라도 흙과 불의 상태에 따라 표면의 결이 조금씩 다릅니다. 우리는 그 차이를 결함이 아니라 그 그릇만의 무늬라고 생각합니다.',
    en: 'Every Gyeol piece is formed in one studio and fired in the same kiln. Even identical forms carry slightly different surfaces, depending on the clay and the fire that day. We see those differences not as flaws, but as each vessel’s own pattern.',
  },
  'about.story.p2': {
    ko: '트렌드를 따라 라인을 늘리기보다, 이미 만든 형태를 다듬는 데 시간을 씁니다. 그래서 결의 제품은 종류가 많지 않지만, 하나하나 손에 익도록 설계되어 있습니다.',
    en: 'Rather than adding lines to follow trends, we spend our time refining the forms we already make. Gyeol’s catalogue is small — but every piece is designed to settle into your hands.',
  },
  'about.story.imgAlt': {
    ko: '작업실 선반에 놓인 초벌 기물들',
    en: 'Bisque-fired pieces resting on studio shelves',
  },
  'about.values.eyebrow': { ko: '원칙', en: 'Principles' },
  'about.values.title': { ko: '우리가 지키는 세 가지', en: 'Three things we keep' },
  'about.process.eyebrow': { ko: '과정', en: 'Process' },
  'about.process.title': { ko: '한 그릇이 완성되기까지', en: 'How a single bowl is made' },
  'about.next.title': {
    ko: '이렇게 만든 그릇들을 만나보세요',
    en: 'Meet the ware we make this way',
  },
  'about.next.cta': { ko: '제품 보기', en: 'View products' },

  /* ── 제품 페이지 ── */
  'products.head.eyebrow': { ko: '제품', en: 'Products' },
  'products.head.title': { ko: '하나의 기물,\n두 가지 색', en: 'One piece,\ntwo colors' },
  'products.head.lead': {
    ko: '전자레인지·식기세척기 사용이 가능합니다. 모든 기물은 소량 생산되어 재고가 유동적입니다.',
    en: 'Microwave- and dishwasher-safe. Everything is made in small batches, so stock varies.',
  },
  'products.featured.eyebrow': { ko: '판매 중', en: 'Available now' },
  'products.featured.cta': { ko: '주문 문의하기', en: 'Inquire to order' },
  'products.color.label': { ko: '컬러', en: 'Color' },
  'products.viewer.hint': { ko: '드래그해서 돌려보세요', en: 'Drag to rotate' },
  'products.more.title': { ko: '다른 기물', en: 'More pieces' },
  'products.coming.title': { ko: '다음 기물을 준비하고 있습니다', en: 'The next piece is in the works' },
  'products.coming.body': {
    ko: '새 기물은 완성되는 대로 인스타그램에서 가장 먼저 소개합니다.',
    en: 'New pieces are announced first on Instagram as they are finished.',
  },
  'products.cta.title': { ko: '재고 확인과 주문 제작 문의', en: 'Stock checks & custom orders' },
  'products.cta.body': {
    ko: '온라인 스토어 오픈 전까지는 이메일과 인스타그램 DM으로 주문을 받고 있습니다.',
    en: 'Until our online store opens, we take orders by email and Instagram DM.',
  },
  'products.cta.btn': { ko: '문의하기', en: 'Get in touch' },

  /* ── 연락처 페이지 ── */
  'contact.head.eyebrow': { ko: '연락처', en: 'Contact' },
  'contact.head.title': { ko: '무엇이든\n편하게 물어보세요', en: 'Ask us\nanything' },
  'contact.head.lead': {
    ko: '주문 제작, 입점·협업, 원데이 클래스 문의를 받고 있습니다. 영업일 기준 2일 안에 답장드립니다.',
    en: 'We welcome custom orders, wholesale and collaboration, and one-day class inquiries. We reply within two business days.',
  },
  'contact.info.showroom': {
    ko: '서울시 ○○구 ○○로 12, 1층\n금–일 13:00–19:00 (예약제)',
    en: '12 ○○-ro, ○○-gu, Seoul — 1F\nFri–Sun 1–7 pm, by appointment',
  },
  'contact.info.wholesale': {
    ko: '입점·도매 문의는 이메일로 제안서를 보내주세요.',
    en: 'For stockist or wholesale inquiries, please email us your proposal.',
  },
  'contact.founders.eyebrow': { ko: '공동대표', en: 'Co-founders' },
  'contact.founders.title': { ko: '만드는 사람들', en: 'The people who make Gyeol' },
  'contact.studio.eyebrow': { ko: '스튜디오', en: 'Studio' },
  'contact.studio.title': { ko: '스튜디오 안내', en: 'Studio details' },

  /* ── 푸터 ── */
  'footer.tagline': { ko: 'CERAMIC STUDIO GYEOL', en: 'CERAMIC STUDIO GYEOL' },
  'footer.copyright': { ko: '© 2026 GYEOL. All rights reserved.', en: '© 2026 GYEOL. All rights reserved.' },
} satisfies Record<string, { ko: string; en: string }>;

export type UIKey = keyof typeof ui;
