<div id="top"></div>

<div align='center'>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=blue"/>
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" />
</div>

<br />

<div align="center">
  <h3 align="center">2주차 과제 - swit</h3>
  <p align="center">
    메신저를 구현한 과제입니다
    <br />
    <br />
    <a href="https://romantic-agnesi-c249b7.netlify.app/"><strong>배포 링크</strong></a>
  </p>
</div>

<br>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#팀원-소개">팀원 소개</a></li>
    <li><a href="#과제-소개">과제 소개</a></li>
    <li><a href="#구현한-기능">구현한 기능</a></li>
    <li>
      <a href="#설치-및-실행">설치 및 실행
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#프로젝트-구조">프로젝트 구조</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<br>

## 팀원 소개

<table align="center">
  <tr>
    <td align="center"><a href="https://github.com/gml9812"><img src="https://avatars.githubusercontent.com/u/28294925?v=4" width="150px" /></a></td>
    <td align="center"><a href="https://github.com/seoysauce"><img src="https://avatars.githubusercontent.com/u/65898861?v=4" width="150px" /></a></td>
    <td align="center"><a href="https://github.com/Yummy-sk"><img src="https://avatars.githubusercontent.com/u/60822846?v=4" width="150px" /></a></td>
    <td align="center"><a href="https://github.com/jambottle"><img src="https://avatars.githubusercontent.com/u/72926450?v=4" width="150px" /></a></td>
  </tr>
  <tr>
    <td align="center"><b>👑 윤희준 (팀장)</b></td>
    <td align="center"><b>정서영</b></td>
    <td align="center"><b>염상권</b></td>
    <td align="center"><b>김재원</b></td>
  </tr>
  <tr>
    <td align="center"><b>입력창, 메시지 답장, 대화 스크롤 구현</b></td>
    <td align="center"><b>사이드바, 레이아웃, 반응형 구현</b></td>
    <td align="center"><b>메시지 표시 및 삭제 구현</b></td>
    <td align="center"><b>리팩토링</b></td>
  </tr>
</table>

<br>
<hr>
<br>

## 구현한 기능
- [x] 접속 시 사용자의 닉네임을 묻는 모달 창이 보여진다.
- [x] 사이드바, 메시지 목록, 모달 창 등에 반응형이 구현되어 있다. 

- [x] 입력창
  - [x] 컨텐츠를 입력하지 않으면 전송 버튼이 비활성화되며, 메시지를 전송할 수 없다.
  - [x] 컨텐츠 입력 시 전송 버튼이 활성화되며, 버튼 클릭 또는 엔터 키를 눌러 메시지를 전송할 수 있다.
  - [x] 여러 줄로 된 메시지를 입력할 수 있으며, 출력 시에도 그대로 여러 줄로 출력된다.
 
- [x] 대화 목록
  - [x] 미리 생성된 데이터로 3명이 5건의 메시지를 주고 받는 내용이 출력된다. 
  - [x] 메시지는 과거부터 최신 순으로 정렬되어 보여진다.
  - [x] 메시지를 전송할 시 대화 목록은 가장 아래로 스크롤된다. 
 
- [x] 메시지
  - [x] 내가 전송한 메시지의 경우 이름 옆에 * 문자가 표시된다.
  - [x] 보낸 날짜의 경우 사용자의 시간대에 맞추어 yyyy-mm-dd hh:MM:ss 포멧으로 출력된다.
  - [x] 메세지에 마우스 커서를 올릴 시 우측에 삭제 버튼과 답장 버튼이 생성된다.
  - [x] 답장을 클릭하면 "사용자 이름\n" + "메시지 내용\n" + "(회신)\n" 문자가 입력창에 자동으로 삽입된다. 입력창에 내용이 존재할 때는 입력된 내용 앞에 입력된다.
  - [x] 삭제 버튼을 클릭하면 "정말로 삭제할까요? *** " 라는 메시지가 모달 창에 출력되며, 확인 버튼 클릭 시 삭제된다. (***은 메시지 내용중 최대 10자 까지 보여주며 뒤에는 ... 처리된다.)

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

## 설치 및 실행

### Prerequisites

1. NPM Install

  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Repository를 clone한다.

  ```sh
  git clone https://github.com/gml9812/wanted-swit.git
  ```

2. NPM Package들을 설치한다.

  ```sh
  npm install
  ```

3. Localhost 환경에서 프로젝트를 실행한다.

  ```sh
  npm start
  ```

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

## 프로젝트 구조

```bash
.
├── @types
│   └── global      # TypeScript 모듈 확장자 지정
├── public
│   └── index.html
└── src
    ├── Router.tsx
    ├── assets      # icons, images
    ├── commons     # constants, mock-data 등
    ├── components  # atomic design에 따른 세부 컴포넌트
    ├── hooks # custom hooks
    ├── index.tsx
    ├── pages
    ├── redux # store, slice 등 redux 관련 파일
    ├── styles      # global styles
    ├── types       # 재사용될 type 모음
    └── utils
```

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>
