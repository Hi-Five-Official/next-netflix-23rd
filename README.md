<p align="center">
  <img width="110" src="public/favicon.svg" alt="Next Netflix Logo" />
</p>

<h1 align="center">Next Netflix</h1>

<p align="center">
  <b>CEOS 23rd Week 5~6</b>
</p>

<p align="center">
  <a href="https://next-netflix-23rd.vercel.app/">🔗 배포 링크</a>
</p>

<br />

> Next.js App Router와 TMDB API를 활용해 구현한 Netflix 클론 프로젝트입니다. <br />
> React Server Components로 홈·상세 데이터를 서버에서 렌더링하고, 무한 스크롤과 Suspense 기반 스켈레톤 UI로 빠른 사용자 경험을 제공합니다.

<br />

## ✨ 주요 기능

### 🎬 랜딩

- Netflix 로고 클릭 시 Lottie 애니메이션과 효과음이 함께 재생되며, 완료 즉시 홈으로 자동 이동
- 애니메이션 라이브러리를 동적 import로 처리해 초기 번들에서 제외

### 🏠 홈

- 일별 트렌딩 콘텐츠를 서버에서 패칭해 4초 간격 자동 슬라이드 히어로 배너로 표시
- 백그라운드 탭 전환 시 슬라이드 인터벌 자동 정지, 복귀 시 재개
- **Previews** / **Netflix Originals** / **Animation Movies** / **Korean Movies** — 4개 섹션 캐러셀
- 각 섹션은 서버 컴포넌트에서 직접 패칭, ISR로 섹션별 캐시 TTL 설정 (트렌딩 1시간 / 오리지널·한국영화 6시간)

### 🔍 검색

- 300ms 디바운스 처리 후 Top Searches ↔ Search Results 자동 전환
- IntersectionObserver 기반 무한 스크롤로 자연스러운 페이지 로드
- Suspense + 스켈레톤 UI로 로딩 상태 선언적 처리
- 페이지 간 중복 결과 제거 및 클라이언트 캐싱으로 불필요한 재요청 방지

### 🎞️ 상세

- 영화·드라마 상세 페이지를 서버에서 렌더링 — 클라이언트 재요청 없음
- 콘텐츠별 OG 메타태그 동적 생성 (타이틀, 설명, backdrop 이미지)
- 줄거리 없는 콘텐츠에 대한 fallback 처리

### 🔧 공통

- 5탭 하단 내비게이션 바 (현재 탭 하이라이트, 랜딩 페이지에서 미표시)
- AVIF/WebP 이미지 자동 변환 및 `sizes` 기반 브라우저 최적화
- SVG 아이콘 전체를 React 컴포넌트로 관리 (SVGR)
- 런타임 에러 바운더리 · 커스텀 404 페이지 제공

<br />

## 📁 폴더 구조

```text
src/
├─ app/
│  ├─ detail/[mediaType]/[id]/  # 상세 페이지 (동적 라우트)
│  ├─ home/                     # 홈 페이지
│  ├─ search/                   # 검색 페이지
│  ├─ error.tsx                 # 런타임 에러 바운더리
│  ├─ loading.tsx               # 페이지 전환 로딩
│  ├─ not-found.tsx             # 404 페이지
│  ├─ layout.tsx                # 루트 레이아웃
│  └─ page.tsx                  # 랜딩 페이지
├─ assets/icons/                # SVG 아이콘 (SVGR)
├─ components/
│  ├─ common/                   # Header, BottomNavbar, Button, HomeIndicator
│  ├─ home/                     # TrendingHero, MediaCardCarousel, 각 섹션
│  ├─ search/                   # SearchInput, SearchContent, SearchResultList 등
│  └─ detail/                   # DetailHero, DetailOverview, DetailActions
├─ constants/                   # 내비게이션 탭, TMDB 상수
├─ lib/
│  ├─ apis/                     # TMDB fetch 함수 및 클라이언트
│  ├─ constants/                # TanStack Query 캐시 설정
│  ├─ hooks/                    # useDebounce, useIntersectionObserver
│  └─ utils/                    # cn, tmdb 이미지 URL 빌더 등
├─ providers/                   # QueryProvider
└─ types/                       # TMDB API 응답 타입
```

<br />


## 🛠️ 기술 스택

| 구분 | 기술 | 선택 이유 |
| --- | --- | --- |
| Framework | <img src="https://img.shields.io/badge/Next.js 16-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white" height="30"/> | RSC로 서버에서 직접 데이터 패칭해 클라이언트 워터폴 제거. 네이티브 fetch의 `next: { revalidate }`로 섹션별 ISR 적용, `next/dynamic`으로 클라이언트 전용 컴포넌트 번들 분리. 개발 환경 Turbopack으로 빠른 HMR 확보 |
| Language | <img src="https://img.shields.io/badge/TypeScript 5-3178C6.svg?style=for-the-badge&logo=typescript&logoColor=white" height="30"/> | 영화·드라마가 혼재된 TMDB 응답을 `media_type` 기반 discriminated union으로 타입 정의, 런타임 오류 없는 안전한 분기 처리 |
| Styling | <img src="https://img.shields.io/badge/Tailwind CSS 4-06B6D4.svg?style=for-the-badge&logo=tailwindcss&logoColor=white" height="30"/> | Figma 수치를 별도 CSS 파일 없이 유틸리티 클래스로 직접 반영. clsx + tailwind-merge를 묶은 `cn` 유틸로 조건부 클래스 충돌 방지 |
| Data Fetching | <img src="https://img.shields.io/badge/TanStack Query v5-FF4154.svg?style=for-the-badge&logo=reactquery&logoColor=white" height="30"/> | `useSuspenseInfiniteQuery`로 무한 스크롤과 Suspense를 선언적으로 연동. staleTime·gcTime 설정으로 동일 검색어 재요청 방지 |
| Animation | <img src="https://img.shields.io/badge/Lottie React-2E2E2E.svg?style=for-the-badge" height="30"/> | Netflix 로고 애니메이션을 JSON 파일만으로 재생. `next/dynamic` lazy 로드로 랜딩 외 페이지에서 번들 제외 |
| Carousel | <img src="https://img.shields.io/badge/Swiper-6332F6.svg?style=for-the-badge&logo=swiper&logoColor=white" height="30"/> | CSS scroll-snap으로 구현 불가한 iOS 스크롤 물리 효과를 FreeMode + momentum으로 자연스럽게 구현 |
| SVG | <img src="https://img.shields.io/badge/SVGR-2E2E2E.svg?style=for-the-badge" height="30"/> | SVG를 React 컴포넌트로 변환해 `className`으로 크기·색상 자유 제어. Turbopack rules에서 `*.svg` import 자동 처리 |
| Linting | <img src="https://img.shields.io/badge/ESLint 9-4B32C3.svg?style=for-the-badge&logo=eslint&logoColor=white" height="30"/> | `eslint-config-next`로 Next.js 이미지 최적화·Link 사용 등 프레임워크 규칙 자동 검사. RSC·클라이언트 컴포넌트·API·타입·아이콘 등 다양한 레이어에 걸친 import 경로를 `simple-import-sort`로 일관성 있게 정렬 |
| Formatting | <img src="https://img.shields.io/badge/Prettier 3-1A2B34.svg?style=for-the-badge&logo=prettier&logoColor=F7B93E" height="30"/> | Tailwind 유틸리티 클래스를 대량으로 사용하는 프로젝트 특성상 `prettier-plugin-tailwindcss`로 클래스 선언 순서를 권장 순서로 자동 정렬 |
| Git Hooks | <img src="https://img.shields.io/badge/Husky-2E2E2E.svg?style=for-the-badge" height="30"/> <img src="https://img.shields.io/badge/lint--staged-4B5563.svg?style=for-the-badge" height="30"/> | 전체 파일이 아닌 staged 파일에만 lint·format을 실행해 커밋 속도 유지. 두 명이 작업하는 환경에서 코드 품질 기준 자동 통일 |
| Package | <img src="https://img.shields.io/badge/pnpm-F69220.svg?style=for-the-badge&logo=pnpm&logoColor=white" height="30"/> | content-addressable 스토리지로 중복 패키지 저장 없이 디스크 절약, 엄격한 의존성 격리로 유령 의존성 방지 |
| Deploy | <img src="https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=vercel&logoColor=white" height="30"/> | Next.js와 최적 통합, PR별 Preview URL 자동 생성으로 머지 전 실환경 검증 가능 |


<br />

## 👥 팀원

<table>
  <tr>
    <td align="center" width="200">
      <a href="https://github.com/waldls">
        <img src="https://github.com/waldls.png" width="130" style="border-radius:50%" />
        <br /><br />
        <b>waldls</b>
      </a>
      <br />
      <sub>Frontend</sub>
    </td>
    <td align="center" width="200">
      <a href="https://github.com/KOJ50">
        <img src="https://github.com/KOJ50.png" width="130" style="border-radius:50%" />
        <br /><br />
        <b>KOJ50</b>
      </a>
      <br />
      <sub>Frontend</sub>
    </td>
  </tr>
</table>

<br />

## 👩🏻‍💻 실행 방법

```bash
git clone https://github.com/Hi-Five-Official/next-netflix-23rd.git
cd next-netflix-23rd
pnpm install
pnpm dev
```

> TMDB API 키가 필요합니다. `.env.local` 파일을 생성하고 아래와 같이 설정하세요.
>
> ```
> NEXT_PUBLIC_API_URL=https://api.themoviedb.org/3
> NEXT_PUBLIC_API_KEY=your_tmdb_bearer_token
> NEXT_PUBLIC_IMAGE_BASE_URL=https://image.tmdb.org
> ```
