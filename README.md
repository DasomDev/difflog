# diffLog

개발 공부를 기록하는 기술 블로그입니다.

## 🚀 기술 스택

- **React 18** - UI 라이브러리
- **Vite 7** - 빌드 도구
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 유틸리티 우선 CSS 프레임워크
- **React Router v6** - 클라이언트 사이드 라우팅
- **react-markdown** - 마크다운 렌더링
- **lucide-react** - 아이콘

## 📁 프로젝트 구조

```
src/
├── app/              # 라우터 설정
├── pages/            # 페이지 컴포넌트
├── features/         # 기능별 모듈
├── entities/         # 비즈니스 엔티티
├── shared/           # 공유 컴포넌트, 유틸리티
├── posts/            # 블로그 포스트 마크다운 파일
└── config/           # 설정 파일
```

## 📝 포스트 작성 방법

`src/posts/` 폴더에 마크다운 파일을 생성하면 자동으로 블로그에 표시됩니다.

### 마크다운 파일 형식

파일명: `post-slug.md`

```markdown
---
id: 'unique-id'
title: '포스트 제목'
excerpt: '포스트 요약'
createdAt: '2024-11-27'
tags: ['React', 'TypeScript']
category: 'React'
---

# 포스트 내용

여기에 마크다운으로 작성하세요.
```

### 프론트매터 필드

- `id`: 고유 식별자 (필수)
- `title`: 포스트 제목 (필수)
- `excerpt`: 포스트 요약 (선택)
- `createdAt`: 작성일 (YYYY-MM-DD 형식)
- `tags`: 태그 배열 (선택)
- `category`: 카테고리 (선택)

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

## 📚 특징

- ✅ CRUD 없이 마크다운 파일로 포스트 관리
- ✅ 자동 포스트 목록 생성
- ✅ 마크다운 렌더링 지원
- ✅ 코드 하이라이팅
- ✅ 반응형 디자인
- ✅ 주황색 테마의 에스테틱한 디자인
