---
id: '2'
title: 'Python Collection'
excerpt: '파이썬의 기본 컬렉션 타입 4가지(list, tuple, set, dict)를 정리하고 비교합니다.'
createdAt: '2025-12-01'
tags: ['Python', 'Collection', 'Programming']
category: 'Python'
---
# 파이썬 기본 컬렉션 타입

파이썬에서 데이터를 저장하고 관리할 때 자주 쓰는 **기본 컬렉션 타입** 4가지.

---

## 1. 리스트 (list)

- **순서 있음 (ordered)**
- **변경 가능 (mutable)**
- **중복 허용**
- **대괄호 `[]`** 사용

```python
fruits = ["apple", "banana", "cherry"]
```

---

## 2. 튜플 (tuple)

- **순서 있음**
- **변경 불가 (immutable)**
- **중복 허용**
- **소괄호 `()`** 사용

```python
point = (10, 20)
```

---

## 3. 세트 (set)

- **순서 없음 (unordered)**
- **중복 불가**
- **변경 가능 (mutable)**
- **중괄호 `{}`** 또는 `set()` 사용

```python
unique_numbers = {1, 2, 3}
```

---

## 4. 딕셔너리 (dict)

- **키(key)-값(value) 쌍**으로 저장
- **순서 있음** (Python 3.7+)
- **키 중복 불가, 값은 중복 가능**
- **중괄호 `{키:값}`** 사용

```python
person = {"name": "Carys", "age": 26}
```
