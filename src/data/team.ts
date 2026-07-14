/* ==========================================================================
   team.ts — 공동대표 소개 ✏️  (이름·사진·연락처는 모두 예시입니다)
   phone / instagram 은 지우면 해당 줄이 화면에서 사라집니다.
   ========================================================================== */

type L10n = { ko: string; en: string };

export interface Founder {
  name: L10n;
  role: L10n;
  bio: L10n;
  photo: string; // public/assets/ 안의 프로필 사진 (세로형 4:5 권장)
  photoAlt: L10n;
  email: string;
  phone?: string;
  instagram?: { handle: string; url: string };
}

export const founders: Founder[] = [
  {
    name: { ko: '김결', en: 'Gyeol Kim' },
    role: { ko: '공동대표 · 제작', en: 'Co-founder · Production' },
    bio: {
      ko: '10년째 물레 앞에 앉아 있습니다. 형태와 유약, 소성까지 제작의 전 과정을 책임집니다.',
      en: 'Ten years at the wheel. Responsible for every step of production — form, glaze, and firing.',
    },
    photo: '/assets/profile-01.svg',
    photoAlt: { ko: '김결 공동대표 프로필 사진', en: 'Portrait of co-founder Gyeol Kim' },
    email: 'gyeol@gyeol.example',
    phone: '010-1234-5678',
    instagram: { handle: '@gyeol.maker', url: 'https://instagram.com/' },
  },
  {
    name: { ko: '이한', en: 'Han Lee' },
    role: { ko: '공동대표 · 브랜드', en: 'Co-founder · Brand' },
    bio: {
      ko: '브랜드와 운영을 맡고 있습니다. 입점·협업, 클래스 관련 문의는 저에게 주시면 가장 빠릅니다.',
      en: 'Runs the brand and operations. For wholesale, collaboration, or class inquiries, I am the fastest route.',
    },
    photo: '/assets/profile-02.svg',
    photoAlt: { ko: '이한 공동대표 프로필 사진', en: 'Portrait of co-founder Han Lee' },
    email: 'han@gyeol.example',
    phone: '010-8765-4321',
    instagram: { handle: '@gyeol.han', url: 'https://instagram.com/' },
  },
];
