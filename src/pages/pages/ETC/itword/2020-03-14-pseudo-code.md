---
title: IT용어 > 의사코드(Pseudo Code)
date: "2020-03-14"
layout: post
draft: false
path: "/posts/pseudoCode"
category: "IT용어"
description: "IT용어 정리[2] - Pseudo code란 무엇인가"
---

## Pseudo Code란?
### 위키백과

[위키백과](https://ko.wikipedia.org/wiki/%EC%9D%98%EC%82%AC%EC%BD%94%EB%93%9C)에서 pseudo code란
프로그램을 작성할 때 각 모듈이 작동하는 논리를 표현하기 위한 언어이다.

특정 프로그래밍 언어의 문법에 의해서 쓰인 것이 아니라 일반적인 언어로 코드를 흉내내어 알고리즘을 써놓은 코드이다.

### 예시

#### C언어 스타일의 슈도코드
```
For (i = 1; i<=100; i++) {
    set print_number to true;
    If i is divisible by 3
        print "Fizz";
        set print_number to false;
    If i is divisible by 5
        print "Buzz";
        set print_number to false;
    If print_number, print i;
    print a newline;
}
```