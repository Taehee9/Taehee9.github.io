---
title: Blog > markdown 사용법
date: "2020-02-21"
layout: post
draft: false
path: "/posts/how-to-write"
category: "Blog"
description: "Blog[3] - gatsby 블로그 작성시 필요한 markdown 사용법"
---

# 마크다운 쓰는 문법

## 헤더
```
# first
## second
### third
#### fourth
##### fifth
###### sixth
---
```

---

## 목록
```
1. 처음
2. 두번째
3. 셋째
4. 넷째

---
- 하나
    + 둘
        - 셋
            * 넷

- [ ] 체크박스
- [x] 체크 
```
1. 처음
2. 두번째
3. 셋째
4. 넷째

---
* 하나
    + 둘
        - 셋
            * 넷

- [ ] 체크박스
- [x] 체크 

## 글씨 효과
```
**굵게**
*기울여서*
~~취소선~~

> 인용문

`인라인코드`

```
**굵게**
*기울여서*
~~취소선~~

> 인용문

`인라인코드`


## 코드
```
` ` `(띄어쓰기 안한 채로)
code content
` ` `

` ` `javascript
let average = (num1, num2) => {
  return (num1 + num2) / 2;
};
average(50, 200);
` ` `
```

```
code content
```

```javascript
let average = (num1, num2) => {
  return (num1 + num2) / 2;
};
average(50, 200);
```

## 표
```
| 드라마 제목 | 주연 배우 | 방영일 | 평점 |
|:----------|:----------:|----------:|------|
| **호텔 델루나** | 이지은, 여진구 | ~*2019.07.13. ~ 2019.09.01.*~ |★★★★★|
| 멜로가 체질 | 천우희, 전여빈, 한지은, 안재홍 | 2019.08.09. ~ |★★★★★|
| 이태원 클라쓰 | 박서준, 김다미 | 2020.01.31. ~ |★★★★★|

```
| 드라마 제목 | 주연 배우 | 방영일 | 평점 |
|:----------|:----------:|----------:|------|
| **호텔 델루나** | 이지은, 여진구 | ~*2019.07.13. ~ 2019.09.01.*~ |★★★★★|
| 멜로가 체질 | 천우희, 전여빈, 한지은, 안재홍 | 2019.08.09. ~ |★★★★★|
| 이태원 클라쓰 | 박서준, 김다미 | 2020.01.31. ~ |★★★★★|


## 기타 링크 및 이미지
```
[네이버 링크](https://naver.com)

<img src="https://cdn.pixabay.com/photo/2018/04/23/14/38/adorable-3344414_1280.jpg" width="200px" height="" />

![강아지](https://cdn.pixabay.com/photo/2018/04/23/14/38/adorable-3344414_1280.jpg)
```


[네이버 링크](https://naver.com)

<img src="https://cdn.pixabay.com/photo/2018/04/23/14/38/adorable-3344414_1280.jpg" width="200px" height="" />

![강아지](https://cdn.pixabay.com/photo/2018/04/23/14/38/adorable-3344414_1280.jpg)
