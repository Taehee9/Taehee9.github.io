---
title: Java > 클래스, 객체, 인터페이스의 차이
date: "2020-01-22"
layout: post
draft: false
path: "/posts/compare-class-interface"
category: "Java"
description: "클래스, 객체, 인터페이스의 차이를 확실하게 정리해두기"
---

## 클래스란?
### 사전상의 의미
[위키백과에서 클래스](https://ko.wikipedia.org/wiki/%ED%81%B4%EB%9E%98%EC%8A%A4_(%EC%BB%B4%ED%93%A8%ED%84%B0_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D))란 객체 지향 프로그래밍(OOP)에서 특정 객체를 생성하기 위해 변수와 메소드를 정의하는 일종의 틀이라고 한다.<br/>
객체를 정의 하기 위한 상태(멤버변수)와 메서드(함수)로 구성되어 있다.

### 간단히 말해서 클래스란!
객체를 만들어내기 위한 틀이다.<br/>

## 객체란?
### 사전상의 의미
[위키백과에서 객체](https://ko.wikipedia.org/wiki/%EA%B0%9D%EC%B2%B4_(%EC%BB%B4%ED%93%A8%ED%84%B0_%EA%B3%BC%ED%95%99))란 클래스에서 정의한 것을 토대로 메모리에 할당된 것으로 프로그램에서 사용되는 데이터 또는 식별자에 의해 참조되는 공간을 의미한다.<br/>
객체는 오브젝트(object)라고도 불리며 변수, 자료구조, 함수가 될 수 있다.<br/>
변수를 이용해 객체에 접근하며 메모리가 할당하기 전까지 객체는 존재하지 않는다.

### 간단히 말해서 객체란!
소프트웨어 상에서 구현할 대상이다.

## 인터페이스란?
### 사전상의 의미
[위키백과에서 인스턴스](https://ko.wikipedia.org/wiki/%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4_(%EC%BB%B4%ED%93%A8%ED%84%B0_%EA%B3%BC%ED%95%99))란 해당 클래스의 구조로 컴퓨터 저장 공간에서 할당된 실체를 의미한다.<br/>

### 간단히 말해서 인터페이스란!
소프트웨어에서 구현된 실체이다.

## 클래스, 객체, 인터페이스의 예시
```java
/* 클래스 */
public class Animal {
	...
}

/* 객체와 인스턴스 */
public class Main {
	public static void main(String[] args) {
		Animal dog, cat, cow; // 객체
	
		// 인스턴스화
		dog = new Animal(); // dog은 Animal 클래스의 인스턴스
		cat = new Animal(); // cat은 Animal 클래스의 인스턴스
	}
}
```

## 클래스, 객체, 인터페이스의 차이점 정리
> **클래스**는 쉽게 말해 설계도,<br/>
**객체**는 그 설계도로 구현한 모든 대상,<br/>
**인스턴스**는 그 객체가 메모리에 할당된 것!