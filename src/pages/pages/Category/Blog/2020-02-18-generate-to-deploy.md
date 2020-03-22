---
title: Blog > Gatsby 블로그 생성부터 Github Pages로 배포까지
date: "2020-02-18"
layout: post
draft: false
path: "/pages/generate-to-deploy"
category: "Blog"
description: "Blog[2] - Gatsby 블로그 생성하고 Github Pages로 배포하는 2가지 방법"
---

## GatsbyJS 설치 방법
우선 gatsby-cli 를 설치한다.
```
npm install -g gatsby-cli
```

설치 후 [Starter Library](https://www.gatsbyjs.org/starters/?v=2)에 들어가서 마음에 드는 starter 라이브러리를 선택한다.
처음부터 만들거라면 starter library를 이용하지 않아도 되지만, starter library를 다운받아 업그레이드 하는 버전을 추천한다.

처음에 나는 [Gatsby 문서](https://www.gatsbyjs.org/docs/quick-start/)를 보면서 따라해봤다.
그 후, starter library를 이용해 해당 library에서 변환하는 작업을 진행했다.

```
# 빈 프로젝트 생성
gatsby new blog

# starter library 이용
gatsby new [프로젝트명] [starter 주소]
```

## 플러그인
Gatsby는 다양한 플러그인을 제공하므로 플러그인에 대해 찾아봤다.
보통 gatsby-config.js 파일에 플러그인들이 적혀져있고, starter library 선택에 따라 기본적인 플러그인들은 적혀져있다.

* gatsby-plugin-react-helmet -> 유동적으로 head 태그가 바뀌기 위함
* gatsby-plugin-page-creator -> 디렉토리 지정해서 자동으로 page 작성
* gatsby-plugin-feed -> RSS 피드 만들기 위함
* gatsby-transformer-remark -> 본문에 마크다운을 사용하기 위함
    * gatsby-remark-prismjs -> prismjs 사용해 code highlighting
    * gatsby-remark-responsive-iframe -> 반응형 컨테이너에 iframe 또는 객체(내장형 youtube 등) 래핑
* gatsby-plugin-google-analytics -> Google 웹 로그 분석을 쉽게 추가하기 위함
* ...

여러가지 플러그인들이 있으니 [플러그인 리스트](https://www.gatsbyjs.org/plugins/)를 살펴보며 자신이 원하는 플러그인을 추가하면 된다.


## Gatsby 블로그 구성
### 폴더 구성
많은 폴더들 중 가장 중요한 폴더는 **/src/pages**이다.
개별 페이지들을 담아두는 폴더이기 때문이다.
gatsby-config.js 파일에 들어가면 설정해둔 부분을 확인할 수 있다.
(만약 자신이 선택한 starter library에 없다면 아래 부분을 추가하면 된다.)

```
plugins: [
    // ...
    {
        resolve: "gatsby-source-filesystem",
        options: {
            path: `${__dirname}/src/pages`,
            name: "pages"
        }
    },
    // ...
],
```

### RSS 피드 설정
Gatsby에서 plugin으로 RSS 피드를 생성할 수 있다.
필요하다면 [gatsby-plugin-feed](https://www.gatsbyjs.org/packages/gatsby-plugin-feed/?=gatsby-plugin-feed)에 들어가서 문서를 보고 참조하면 된다.

확인하려면 배포 후 head에 아래 코드가 있는지 확인하면 된다.
```
<link rel="alternate" type="application/rss+xml" href="/rss.xml">
```

---

## Github Pages 배포 방법
우선 gh-pages 패키지 설치
> npm install gh-pages --save-dev


## Github Pages 2가지 배포 방법
### 개인 사이트
Git repository = [사용자명].github.io

pakage.json에
```
{
    "script": {
        "deploy": "gatsby build && gh-pages -d public -b master"
    }
}
```

### 프로젝트 사이트
Git repository = 프로젝트명

```
package.json에
{
    "script": {
        "deploy": "gatsby build --prefix-paths && gh-pages -d public"
    }
}
```

gatsby-config.js 에
module.exports = {
    pathPrefix: "/[프로젝트명 = Repository명]"
}

### 배포 명령어
```
npm run deploy
```

입력해서 github pages에 배포


## 접속방법
### 개인 사이트
https://[사용자명].github.io

### 프로젝트 사이트
https://[사용자명].github.io/[프로젝트명]
