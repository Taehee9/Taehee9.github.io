---
title: Gatsby 블로그 Github Pages로 배포하기
date: "2020-02-18T20:11:12.284Z"
description: "Gatsby 블로그 Github Pages로 배포하는 2가지 방법"
---

## Github Pages 배포 방법
우선 gh-pages 패키지 설치
> npm install gh-pages --save-dev

## Github Pages 2가지 배포 방법
### 개인 사이트
Git repository = [사용자명].github.io

pakage.json에
{
    "script": {
        "deploy": "gatsby build && gh-pages -d public -b master"
    }
}

### 프로젝트 사이트
Git repository = 프로젝트명

package.json에
{
    "script": {
        "deploy": "gatsby build --prefix-paths && gh-pages -d public"
    }
}

gatsby-config.js 에
module.exports = {
    pathPrefix: "/[프로젝트명 = Repository명]"
}

## 접속방법
### 개인 사이트
https://[사용자명].github.io

### 프로젝트 사이트
https://[사용자명].github.io/[프로젝트명]