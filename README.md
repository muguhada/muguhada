# 브랜드 웹사이트 (Astro · 한/영 2개 국어)

Astro 5 기반 정적 사이트입니다. 한국어(`/`)와 영어(`/en/`)가 같은 페이지
컴포넌트를 공유하며, 헤더의 **KO · EN** 버튼으로 전환합니다.
현재 콘텐츠(브랜드 "결", 대표 이름, 연락처 등)는 **모두 예시**입니다.

## 시작하기

```bash
npm install     # 최초 1회
npm run dev     # 개발 서버 → http://localhost:4321
npm run build   # 배포용 정적 파일 생성 → dist/
```

## 어디를 수정하면 되나요?

| 바꿀 것 | 파일 |
|---|---|
| **모든 텍스트 (한/영)** | `src/i18n/ui.ts` — 항목마다 ko/en이 나란히 |
| 로고 (정사각 SVG) | `public/assets/logo.svg` 교체 (경로는 `src/data/site.ts`) |
| 제품 (컬러 포함) | `src/data/products.ts` |
| 공동대표 프로필 | `src/data/team.ts` |
| 브랜드명·히어로 이미지·스튜디오 연락처 | `src/data/site.ts` |
| 색상·폰트 | `src/styles/global.css` 맨 위 `:root` 토큰 |
| 헤더/푸터 | `src/components/Header.astro` / `Footer.astro` |

## 로고 (심볼 + 워드마크)

헤더 좌측은 **1×1 심볼 + 가로형 워드마크** 조합입니다.
`src/assets/brand/` 안의 파일 3개를 교체하세요:

| 파일 | 역할 |
|---|---|
| `logo-mark.svg` | 1×1 정사각 심볼 |
| `wordmark-ko.svg` | 가로형 한글 워드마크 — 한국어 페이지에 표시 |
| `wordmark-en.svg` | 가로형 영문 워드마크 — 영어 페이지에 표시 |

SVG 안에 `fill="currentColor"`를 유지하면 홈 투명 헤더(밝은 색)와
스크롤 후(어두운 색)의 색을 자동으로 따라갑니다. 고유 브랜드 컬러가
있는 로고라면 원래 fill 값을 그대로 두면 됩니다.
워드마크는 텍스트를 **외곽선(패스)으로 변환**해 내보내는 걸 권장합니다.
예전 텍스트 로고는 `src/data/site.ts`의 `headerTextLogo: true`로 되살릴 수 있습니다.

## 제품 — 지금은 1종(화이트/블랙), 나중엔 확장

`src/data/products.ts`에서 모두 관리합니다.

- **`published: true`** → 사이트에 노출. **첫 번째** published 제품이 제품
  페이지 상단의 대표 스포트라이트(컬러 스와치 전환 포함)로 크게 표시됩니다.
- **`published: false`** → 완전히 숨김. 확장 레이아웃 확인용 더미 3종이
  이 상태로 들어 있습니다. `true`로 바꾸고 `npm run dev` 하면 대표 제품
  아래 그리드에 어떻게 배치되는지 미리 볼 수 있습니다.
- published 제품이 1개뿐일 때는 그리드 대신 "다음 기물을 준비하고
  있습니다" 안내가 표시됩니다.
- 컬러 추가는 `colors` 배열에 항목 추가 — 스와치 버튼이 자동 생성됩니다.
- 홈 화면은 대표 제품의 컬러 변형들을 카드로 보여줍니다.

## 공동대표 소개 (연락처 페이지)

`src/data/team.ts`에서 이름·직책·소개·사진·개인 연락처를 수정합니다.
`phone`이나 `instagram` 필드를 지우면 해당 줄이 화면에서 사라집니다.
프로필 사진은 세로형(4:5)을 권장하며 `public/assets/`에 넣으세요.
기존 문의 폼은 제거했습니다 — 다시 필요해지면 요청하세요.

## 제품 3D 뷰어 (STL)

제품 페이지 대표 제품 자리에 **드래그로 좌우 회전**되는 3D 뷰어가 있습니다.

- STL 교체: `public/assets/product-sample.stl`을 실제 파일로 바꾸고
  `src/data/products.ts`의 `model.stl` 경로 확인. `model` 필드를 지우면
  기존 이미지 표시로 돌아갑니다.
- 컬러 스와치를 누르면 3D 재질(색·광택)이 함께 바뀝니다 — 각 컬러의
  `material: { color, roughness }` 값으로 조절 (roughness 0=유광, 1=무광).
- 로드 전/실패/JS 꺼짐 환경에서는 poster 이미지가 그대로 보입니다.
- three.js는 제품 페이지에서만 로드됩니다 (gzip 약 130KB).

**⚠ 보안 주의:** 웹에 올린 STL은 브라우저 개발자 도구로 누구나 내려받을
수 있습니다. 원본 도면 유출이 걱정되면 ① 디테일을 뭉갠 저해상 "전시용"
메시를 따로 내보내 올리거나(권장), ② 3D 대신 턴테이블 렌더 영상을 쓰세요.
GLB 변환·압축도 추출을 막지는 못합니다.

## 히어로 이미지 (PC / 모바일 분리)

`src/data/site.ts`에서 경로 지정:

```ts
heroDesktop: '/assets/hero-desktop.svg',  // 768px 이상
heroMobile:  '/assets/hero-mobile.svg',   // 768px 미만
```

권장 크기 — PC: 1920×1080 이상 가로형, 모바일: 1080×1680 내외 세로형.

## 배포

**Vercel** — GitHub push 후 import하면 Astro 자동 감지, 그대로 Deploy.
**Cloudflare Pages** — Framework preset: Astro (빌드 `npm run build`, 출력 `dist`).
배포 후 `astro.config.mjs`의 `site`를 실제 도메인으로 변경하세요.

## 폴더 구조

```
src/
├── i18n/ui.ts           ✏️ 모든 텍스트 (한/영 나란히)
├── assets/brand/        ✏️ 로고: 심볼 1 + 워드마크 2 (한/영)
├── data/
│   ├── site.ts          ✏️ 브랜드명·히어로·스튜디오 연락처
│   ├── products.ts      ✏️ 제품 (published · 컬러 · 3D 모델)
│   ├── team.ts          ✏️ 공동대표 2인
│   └── about.ts         ✏️ 원칙·제작 과정
├── styles/global.css    ✏️ 디자인 토큰 + 전체 스타일
├── layouts/BaseLayout.astro
├── components/          Header · Footer · LangSwitch · ProductCard
│   └── pages/           Home · About · Products · Contact 본문
└── pages/               라우트 (ko 4개 + en/ 4개)
public/assets/           이미지 (로고·히어로·제품·프로필)
```

## 폰트 라이선스

Hahmlet · Pretendard — 모두 SIL OFL, 상업적 사용 가능.
