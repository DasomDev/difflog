# React + Vite + TypeScript + Tailwind CSS Boilerplate

React, Vite, TypeScript, Tailwind CSS를 사용한 현대적인 웹 애플리케이션 보일러플레이트입니다.

## 🚀 기술 스택

- **React 18** - UI 라이브러리
- **Vite 7** - 빌드 도구
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 유틸리티 우선 CSS 프레임워크
- **React Router v6** - 클라이언트 사이드 라우팅 (Data Router)

## 📁 프로젝트 구조

```
src/
├── app/              # 라우터 설정
│   └── router.tsx    # React Router 설정
├── pages/            # 페이지 컴포넌트
├── features/          # 기능별 모듈
├── entities/          # 비즈니스 엔티티
├── shared/            # 공유 컴포넌트, 유틸리티
├── config/            # 설정 파일
├── App.tsx            # 루트 컴포넌트
├── main.tsx           # 진입점
└── index.css          # 글로벌 스타일
```

### 폴더 설명

- **`app/`** - 라우터 설정 및 앱 레벨 설정
- **`pages/`** - 페이지 컴포넌트 (라우트와 1:1 매핑)
- **`features/`** - 기능별 모듈 (독립적인 기능 단위)
- **`entities/`** - 비즈니스 엔티티 (도메인 모델)
- **`shared/`** - 공유 컴포넌트, 유틸리티, 상수 등
- **`config/`** - 앱 설정, 환경 변수 등

## 🛠️ 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

### 빌드

```bash
npm run build
```

### 빌드 미리보기

```bash
npm run preview
```

### 린트

```bash
npm run lint
```

## 📝 사용법

### 라우팅 추가

`src/app/router.tsx`에서 라우터를 설정합니다:

```tsx
import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '@/pages/HomePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
])
```

### 페이지 컴포넌트 생성

`src/pages/` 폴더에 페이지 컴포넌트를 생성합니다:

```tsx
// src/pages/HomePage.tsx
export const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1>Home Page</h1>
    </div>
  )
}
```

### Path Alias 사용

`@/` 별칭을 사용하여 `src/` 폴더를 참조할 수 있습니다:

```tsx
import { Button } from '@/shared/ui/Button'
import { useAuth } from '@/features/auth'
```

## 🔧 설정

### Path Alias

`@/` 별칭이 `src/` 폴더를 가리키도록 설정되어 있습니다.

- `tsconfig.json` - TypeScript 경로 매핑
- `vite.config.ts` - Vite 리졸브 별칭

### Tailwind CSS

`tailwind.config.js`에서 Tailwind 설정을 수정할 수 있습니다.

## 📚 참고 자료

- [React 공식 문서](https://react.dev/)
- [Vite 공식 문서](https://vite.dev/)
- [React Router 공식 문서](https://reactrouter.com/)
- [Tailwind CSS 공식 문서](https://tailwindcss.com/)

## 📄 라이선스

MIT
