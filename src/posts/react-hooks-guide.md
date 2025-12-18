---
id: '1'
title: 'React Hooks 가이드'
excerpt: 'React Hooks의 기본 개념부터 고급 사용법까지 알아봅니다.'
createdAt: '2025-11-26'
tags: ['React', 'Hooks', 'Frontend']
category: 'React'
---

# React Hooks 가이드

React Hooks는 함수형 컴포넌트에서 상태 관리와 생명주기 기능을 사용할 수 있게 해주는 기능입니다.

## useState

가장 기본적인 Hook입니다. 상태를 관리할 때 사용합니다.

```tsx
const [count, setCount] = useState(0);
```

## useEffect

컴포넌트가 렌더링된 후 실행되는 Hook입니다.

```tsx
useEffect(() => {
  // 여기에 사이드 이펙트 코드 작성
}, [dependencies]);
```

## useContext

Context를 더 쉽게 사용할 수 있게 해주는 Hook입니다.

```tsx
const value = useContext(MyContext);
```

## 커스텀 Hook

자신만의 Hook을 만들어서 로직을 재사용할 수 있습니다.

```tsx
function useCounter(initialValue: number) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  
  return { count, increment, decrement };
}
```

