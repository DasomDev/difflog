---
id: '3'
title: 'React Hooks와 Vue Composition API 비교'
excerpt: 'React Hooks와 Vue Composition API를 비교하며 개념을 익혀보자'
createdAt: '2025-12-19'
tags: ['React', 'Vue', 'Frontend']
category: 'React'
---

## 컴포넌트 실행

- **Vue 3 (Composition API)**: `setup()`은 생성 시 딱 한 번 실행
- **React (Hooks)**: 상태 변경 시 컴포넌트 함수가 통째로 다시 실행

## 반응성 원리

- **Vue 3 (Composition API)**: 데이터 추적(`Proxy`)을 통해 바뀐 부분만 업데이트
- **React (Hooks)**: Virtual DOM 비교를 통해 전체를 다시 계산(Re-run)

## 최적화

- **Vue 3 (Composition API)**: 엔진이 자동으로 처리 (Fine-grained)
- **React (Hooks)**: 개발자가 Hook(`useMemo` 등)으로 직접 수동 제어


