# 📢 Project Style Guide & Conventions

이 가이드는 프로젝트의 일관성과 코드 품질 유지를 위해 반드시 준수해야 하는 규칙이다.  
Gemini AI는 모든 PR(Pull Request) 리뷰 시 본 문서를 기준으로 엄격히 검토하고, 위반 사항이 있을 경우 명확히 지적해야 한다.

---

## 1. 커밋 컨벤션 (Commit Convention)

### 1.1 기본 형식

모든 커밋 메시지는 아래 형식을 따른다.

```
#이슈번호 [타입] 작업내용
```

예시:

```
#7 [UI] 로그인 페이지 구현
```

형식을 지키지 않은 경우 수정 요청한다.

### 1.2 타입 목록

- `[FEAT]` : 새로운 기능 구현
- `[MOD]` : 코드 수정 및 내부 파일 수정
- `[ADD]` : 부수적인 코드/라이브러리 추가, 새로운 파일 생성
- `[CHORE]` : 버전 수정, 패키지 구조 변경, 변수명 변경 등 사소한 변경
- `[DEL]` : 코드나 파일 삭제
- `[UI]` : UI 관련 작업
- `[FIX]` : 버그 및 오류 해결
- `[MOVE]` : 프로젝트 내 파일/코드의 이동
- `[RENAME]` : 파일 이름 변경
- `[REFACTOR]` : 전면 수정 (리팩토링)
- `[DOCS]` : 문서 개정 (README, WIKI 등)

---

## 2. 네이밍 컨벤션 (Naming Convention)

### 2.1 폴더 및 파일 명명

#### 폴더명

- 소문자로 시작하는 `camelCase`를 사용한다.
- `components/`, `apis/` 등 하위 폴더는 도메인별로 분리하여 구성한다.

```
📁 src
 ┣ 📁 apis
 ┃  ┣ api.ts          ← 인스턴스 설정 파일 (예외적으로 도메인 폴더 없이 위치)
 ┃  ┣ 📁 auth         ← auth 도메인 API
 ┃  ┣ 📁 combo        ← combo 도메인 API
 ┃  ┗ 📁 mypage       ← mypage 도메인 API
 ┣ 📁 assets
 ┃  ┗ 📁 icons
 ┣ 📁 components
 ┃  ┣ 📁 common       ← 공통 컴포넌트
 ┃  ┗ 📁 {도메인}     ← 도메인별 컴포넌트 폴더
 ┣ 📁 constants
 ┣ 📁 hooks
 ┣ 📁 store
 ┣ 📁 data
 ┣ 📁 types
 ┗ 📁 utils
```

#### 컴포넌트 파일 (`.tsx`)

- 대문자로 시작하는 `PascalCase`를 사용한다.
- 파일명과 컴포넌트명을 반드시 일치시킨다.
- 화살표 함수로 작성한다.

```
PrimaryButton.tsx   → PrimaryButton 컴포넌트
LoadingSpinner.tsx
InputLabel.tsx
```

#### 페이지 파일 (`.tsx` — page, layout 등)

- `"use client"` 지시어가 **없을 때**: 변수명을 소문자 `page`로 선언하여 내보낸다.

```tsx
const page = () => {
  return <div>Hello World</div>;
};

export default page;
```

- `"use client"` 지시어가 **있을 때**: 변수명을 대문자 `Page`로 선언하여 내보낸다.

```tsx
"use client";

const Page = () => {
  return <div>Hello World</div>;
};

export default Page;
```

- `export default function Page()` 형식은 사용하지 않는다.

#### 일반 파일 (`.ts` — hook, util 등)

- 소문자로 시작하는 `camelCase`를 사용한다.

```
useDeviceSearch.ts
validatePassword.ts
```

#### Asset 파일 (아이콘 등)

- 모두 소문자로 작성하며, 필요 시 `snake_case`를 허용한다.
- 네이밍 규칙: `icon_{모양}_{방향}_{fill|regular|thin}.svg`
  - 파일명이 `icon_home_regular.svg`라면 사용처에서는 `HomeIcon`처럼 컴포넌트화하여 내보낸다.

```
icon_chevron_right.svg
icon_heart_fill.svg
```

---

### 2.2 코드 내 명명 규칙

- 함수 및 변수명은 소문자로 시작하는 `camelCase`를 사용한다.
- `kebab-case` 사용을 금지한다.
- 축약어 남용을 지양하고 의미가 명확한 이름을 사용한다.

```ts
const fetchUserProfile = async () => {};
const isLoggedIn = true;
let selectedIndex = 0;
```

---

### 2.3 API 네이밍 규칙

- API 함수는 `METHOD + 함수명` 구조로 작성한다. (METHOD: `get`, `post`, `patch`, `put`, `delete` 등)

```
patchEditProfile
getUserProfile
postLogin
```

- API Hook은 `use + METHOD + 함수명` 구조로 작성한다.

```
usePatchEditProfile
useGetUserProfile
usePostLogin
```

---

## 3. 개발 규칙 (Development Rules)

### 3.1 폴더 구조 (src/ 기준)

```
src/
 ┣ app/              # 앱 라우터
 ┣ apis/              # 인스턴스 설정 (api.ts) 및 도메인별 API 폴더
 ┃ ┣ api.ts          # axios 인스턴스 설정용
 ┃ ┣ auth/
 ┃ ┃ ┣ postJoin.ts
 ┃ ┃ ┗ postLogout.ts
 ┃ ┣ combo/
 ┃ ┃ ┣ deleteCombo.ts
 ┃ ┃ ┣ getComboEvaluation.ts
 ┃ ┃ ┗ postComboDevices.ts
 ┃ ┗ mypage/
 ┃   ┣ putEditPassword.ts
 ┃   ┗ patchEditProfile.ts
 ┣ assets/           # icons/ 등 정적 에셋
 ┃ ┗ icons/
 ┣ components/       # common/ 및 도메인별 폴더
 ┃ ┣ common/         # 공통 컴포넌트
 ┃ ┗ {도메인}/       # 도메인별 컴포넌트 폴더
 ┣ constants/        # queryKey.ts, tokenKey.ts 등 상수 관리
 ┣ store/            # 전역 상태 관리
 ┣ data/             # mockData 관리, 배열 맵핑
 ┣ hooks/
 ┣ types/            # 도메인 이름.ts (에다가 모아놓기)
 ┗ utils/            # 공통 로직 (ex. 날짜 변환 함수)
```

- API는 도메인 기준으로 분리한다.
- 상수는 반드시 `constants/`에 정의한다.
- 타입은 `types/` 하위에서 도메인 단위로 관리한다.

---

### 3.2 API 관련 규칙

#### API 함수 파일 위치

- `apis/` 폴더 아래에 API 명세서 항목(도메인) 기준으로 폴더를 구성하여 파일을 생성한다.

#### API 호출 시 try-catch 작성 위치

- `try-catch`는 정의부(API 함수)에서는 작성하지 않고, 호출부(컴포넌트 또는 Hook)에서 작성한다.
- API 연동 시 `console.log`로 데이터 정상 수신 여부를 확인할 수 있다.
- 단, PR 제출 전 `console.log`를 반드시 제거하고, 실제 실행 영상 또는 스크린샷을 첨부한다.

#### API URI 상수화 여부

- URI는 상수화하지 않고, API 함수 내부에 직접 문자열로 작성한다.

```ts
axiosInstance.get("/api/combo/list");
```

---

### 3.3 상수(Constants) 관리

#### Token Key

- `constants/tokenKey.ts`에 정의한다.

```ts
export const ACCESS_TOKEN = "ACCESS_TOKEN";
```

#### Query Key

- `constants/queryKey.ts`에 정의한다.

```ts
export const queryKey = {
  USER_PROFILE: "user_profile",
  TAGS: "tags",
  COMBOS: "combos",
  COMBO_DETAIL: "combo",
  COMBO_EVALUATION: "combo_evaluation",
  LIFESTYLE_DEVICE: "lifestyle_device",
} as const;
```

---

### 3.4 타입 정의 (types/)

- `types/` 하위에 도메인별 폴더를 구성한다.
- API / 비즈니스 도메인 기준으로 분리한다.

```
types/
 ┣ user.ts
 ┣ combo.ts
 ┗ auth.ts
```

---

### 3.5 React & Next.js 규칙

#### 페이지 구성

- `"use client"` 지시어가 **없을 때**: 소문자 `page`로 선언한다.

```tsx
const page = () => {
  return <div />;
};

export default page;
```

- `"use client"` 지시어가 **있을 때**: 대문자 `Page`로 선언한다.

```tsx
"use client";

const Page = () => {
  return <div />;
};

export default Page;
```

- `export default function Page()` 형식은 사용하지 않는다.

---

## 4. Gemini 리뷰 가이드라인

### 4.1 리뷰 작성 원칙

- 모든 리뷰 답변은 한국어로 작성한다.
- 위반 사항은 명확한 수정 방향과 함께 제시한다.

---

### 4.2 리뷰 체크리스트

Gemini AI는 아래 항목을 반드시 점검한다.

- [ ] 커밋 메시지가 `#번호 [타입] 작업내용` 형식을 따르는가?
- [ ] 파일명이 규칙(PascalCase vs camelCase)에 맞게 작성되었는가?
- [ ] 페이지 컴포넌트가 `"use client"` 여부에 따라 `page` / `Page`로 올바르게 선언되었는가?
- [ ] `export default function Page()` 형식이 사용되지 않았는가?
- [ ] API 함수 파일이 `apis/` 하위 도메인 폴더에 위치하는가?
- [ ] API 함수명이 `METHOD + 함수명` 규칙을 따르는가?
- [ ] API Hook이 `use + METHOD + 함수명` 구조를 따르는가?
- [ ] 코드 내에 `console.log`가 남아있지 않은가?
- [ ] `try-catch` 위치가 정의부가 아닌 호출부에 작성되었는가?
- [ ] URI가 상수화되지 않고 API 함수 내부에 직접 작성되었는가?
- [ ] Token Key가 `constants/tokenKey.ts`에 정의되어 있는가?
- [ ] Query Key가 `constants/queryKey.ts`에 정의되어 있는가?
- [ ] `kebab-case` 네이밍이 사용되지 않았는가?
- [ ] Asset 파일명이 `icon_{모양}_{방향}_{fill|regular|thin}.svg` 규칙을 따르는가?

---

본 문서는 프로젝트 전반에 적용되는 공식 스타일 가이드이며, 변경은 팀 합의 하에만 가능하다.
