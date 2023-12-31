#  Node.js

- javascript 런타임이다. 이벤트 기반, 논 블로킹  I/O모델을 사용해 가볍고 효율적이다.
- 간단한 로직으로 구성된 서비스
- 빠른 응답시간이 요구되는 서비스
- 빠른 개발이 요구되는 서비스
- 비동기방식에 어울리는 서비스(채팅, 스트리밍 서비스)

- ### 장점 

- 싱글 스레드, 논블로킹 I/O에 따른 빠른 속도
- 컴퓨터 자원을 덜 사용
- 자바스크립트를 사용하기에 프론트 개발자 사용 용이
- 생산성이 높음
- ### 단점 

- 싱글스레드 기반이라 자원을 많이 먹는 작업이 오면 부하에 크게 걸림
- 싱글 스레드는 CPU 코어 한개만 사용 -> CPU 작업 많은 서버로 부적합(게임서버등)
- 로직이 복잡한 경우 콜백함수의 늪에 빠질 수 있음
- 에러가 발생하면 프로세스 자체가 죽어버림

### javascript 런타임

런타임은 프로그래밍 언어가 구동되는 환경
자바스크립트를 이용할 수 있는 분야를 넓혔다.


### 이벤트 기반 
이벤트가 발생할 때 미리 지정해둔 작업을 수행하는 방식

### 블로킹  I/O
3분   ->     3분
클라이언트 -> 서버 
클라이언트가 3분정도 걸리는 일을 서버에 처리 요청 -> 서버 3분동안 일처리 👩‍🚒 , 클라이언트는 그 3분 동안 자신의 작업을 중지 😪  -> 서버가 일을 마치고 클라이언트에게 응답 -> 작업 끝

- 단점 :  클라이언트가 긴 불량의 작업 요청을 보내면 클라이언트는 긴 시간동안 대기를 해야함,
이전 작업이 다 끝난 다음에 다음 작업을 수행하는 것, 대기시간이 많이 걸리는 일을 처리할 수록 
효율적이지 못하는 구조를 가짐

### 논 블로킹  I/O (node.js 채택)

클라이언트 -> 서버 
클라이언트가 서버에게 3시간걸리는 일을 요청 -> 서버는 백그라운드에서 일을 처리 -> 처리하는 동안에 클라이언트가 서버에 요청을 보낼 수 있음 , 서버에서 이 전의 보낸 응답이 완료되면 바로 응답처리
- 장점 : 기다리지 않고 바로 응답과 요청을 받을 수 있다

1. 이전 작업이 완료될 때 까지 기다리지 않고, 다음 작업들을 수행
2. 오래걸리는 작업은 백그라운드에서 처리

###  스레드 

- 작업을 실행하는 단위, 모든 요청을 실행하고 수행하는 것 
- node.js는 싱글 스레드를 가짐

### 싱글 스레드 
- 주어진 작업을 한개의 스레드(혼자) 처리하는 방식, 
- 모든 요청과 응답을 하나의 스레드가 처리 

스레드 -> 브라우저
      <- 브라우저
      <- 브라우저
- 장점 :  메모리나 기타 자원을 효율적으로 사용 가능
- 단점 : 스레드에 문제가 생길 시 전체에 문제가 생길 가능성이 있음

### 멀티 스레드

- 하나의 요청과 응답에 하나의 스레드가 담당, 여러개의 스레드가 일을 나눠 처리


스레드 -> 브라우저
스레드  <- 브라우저
스레드  <- 브라우저

- 장점 :  하나의 스레드가 문제가 생겨도 다른 스레드로 대체 가능
- 단점 :  스레드간의 작업 전환 비용, 놀고 있는 스레드 문제 발생

----------

### scope  
 변수에 접근할 수 있는 범위

### var, let , const 

let -  변수 , 값을 재정할 수 있는 변수 선언 방식 , 중괄호 스코프를 가짐
cosnt - 상수 , 값을 재정의 할 수 없는 변수 선언 방식 , 중괄호 스코프를 가짐


---------------

## Arrow function

- function키워드 보다 간단한 함수 표현 가능


## 비구조화 할당

- 객체,배열안의 값을 추출해서 변수,상수에 바로 선언하는 문법



### 비동기 
- 기다리지 않고 각자 작업 , 언제 끝날지 모르는 상황, 순차적이지 않음
- callback 함수를 사용 -> 너무 많이 사용하면 callback hell -> promise사용해 지옥 탈출
- 버튼 클릭 함수-> 창에 경고창을 띄운다 
### 동기

### promise

- pending : 대기상태 , 호출시 
- pulfilled :  이행상태
- rejected : 실패상태

-------------

### Server란?

- 네트워크를 통해 클라이언트에 정보나 서비스를 제공, 컴퓨터 혹은 프로그램
- 클라이언트 요청에 대한 응답을 하는 역할
클라이언트 (요청)-> 서버

클라이언트 <-(응답) 서버

### localhost = 127.0.0.1 IP

- 현재 컴푸터의 내부 주소 
- 서버 개발할 떼 테스트 용으로 많이 사용


### 포트(port)

- 서버내의 프로세스를 구분하는 번호
- 서버에서는 다양한 일을 처리(HTTP ,DB)
- 포트번호에 따라 다양한 기능들을 구분해 접근할 수 있다.
- localhost에 접근할 때도 기능에 따라 포트번호로 구분해서 접근 할 수 있다

### http 메소스

- 단순 페이지 열람 요청 : GET
- 개시물 업로드 : POST
- 업데이트 : PUT
- 삭제 : DELETE


### API 서버 구축

- API 서버 : 요청을 받고 응답하는 서버

### npm 소개

Node.js로 만들어진 패키지를 설치하고 관리해주는 툴
서로 의존되는 패키지들 존재,패키지의 버전마다 기능이 다를 수 있는 문제
설치한 패키지 버전을 관리해주는 파일이 필요 -> package.json 파일 생성


### express , express-generator로 프로젝트 만들기

터미널에서
```
npm init

```
실행
```
npm run

```

패키지 설치

```
npm install express

```
다양한 옵션 설치 

-D 는 개발환경에서만 사용하고싶다, 배포할 땐 필요없음
devDependencies: 개발환경에서 사용
 
```
 npm install -D nodemon

```

-g :  전체적으로 공통 패키지 설치, 모든 프로젝트에서 사용가능하게

```
npm install -g express-generator

```
```
npm install -g express express-generator nodemon

```
 express-generator를 통해서 프로젝트 생성

```
express --ejs 프로젝트 명

```
```
npm install
npm start
```
```
nodemon : index.ejs의 변경사항이 있을 때 서버를 껏다켰다하는 번거로움을 없애주는 패키지 
```



### express 
- 빠르고 간편한 웹 프레임워크

#### 기존               vs         express
1. req.url 파싱              1. req.get('경로')
2. req.method 확인           2. req.query로 확인
3. 쿼리문 파싱

#### express-generator 
- express의 기본 구조를 만들어 줌

- ##### 파일 구조

> www -> 서버를 실행하는 파일, 포트 번호를 지정 가능
public -> image ,js, css등 리소스가 올라감
routes -> 페이지 라우팅과 관련된 파일 저장 , 실제 서버 로직 작성
views -> 쳄플릿 파일(html코드 안에 js코드를 쓸 수 있다) , jade,ejs..
app.js -> 핵심적인 서버 역할 , 라우팅의 시작점
package.json -> 의존성 관리 , 버전 관리

 ####  프레임워크 
- 프로그램을 만들기 위한 기본 틀
- 자동차 (바퀴, 엔진 , 핸들...)
문은 어디,, 엔진은 어디,, 각 각 요소에 맞는거끼리 넣어주면 끝
체계적인 코드관리, 유지보수 용이


-------------- 

## Routing


- 서버는 분기처리의 요청에 따라 처리를 해주는 것

------

## HTTP 메소드

- 서버에 요청을 보내는 방식

- GET : 요청 받은 정보를 검색(READ)하여 응답
- POST : 요청된 자원을 생성(CREATE)
- PUT : 요청된 자원을 수정(UPDATE)
- DELETE : 요청된 자원을 삭제(DELETE)


## 미들웨어
      목적에 맞게 처리하는 함수들(middleware)
req 요청 <----------------------------> res 응답
라우터에 상관없이 실행된다.

#### 로그인 체크 상황 가정
어떠한 모든 요청에 따라 함수를 체크함 -

사용자가 로그인 되어있을 때만 할 수 있는 요청
- 요청을 했을 때 각각 함수를 체크, 하지만 요청이 들어왔을 때 각각 함수를 실행하는 건 비효율적
-> 미들웨어를 통해 어떠한 요청이 들어와도 미들웨어 함수가 한 번씩은 실행이 된다.
어떤 요청이 들어와도 로그인 체크라는 미들웨어가 사용자가 로그인이 되었는지, 안 되어있는지 체크를 하게 된다. 이처럼 응답과 요청 사이에 위치하면서 특정 기능을 수행하는 함수이다.


"/create"
req       ------------> res
"/delete"
req       ------------> res
"/update"
req       ------------> res


### multer

- 파일을 업로드할 때 유용한 패키지
이미지 업로드 서버 구축

upload.single('image)
파일 1갸를 업로드 image라는 FormData전송

업로드 된 파일은 req.file
나머지 요청 데이터는 req.body

```
npm install multer

```


### ejs  
자바스크립트 변수를 view 파일 내에서도 사용 가능




### express-sesstion

-express에서 sesstion을 쉽고 빠르게 적용할 수 있는 패키지
로그인 상태에서 많이 씀
sesstion -> 상태정보를 저장하는 한계를 극복 , 즉 연결상태 유지


```
npm install express-session   

```


## DB (데이터를 구조화하여 저장시켜 놓은 집합체)

- Query : 정보를 요청하려면 , 관리하기 위한 명령을 하거나 원하는 정보를 요청하는 행위

- SQL :  Query문을 구조적으로 체계화시켜 놓은 것 
>  장점 :  명확하게 정의된 스키마 , 데이터 중복없이 저장
> 단점 :  덜 유연함 (스키마 수정 번거로움)
- 스키마 : 어떤 구조로, 어떤 제약조건으로 저장되어야하는지 정의한 것


 ### NoSQL
스키마 없음, 관계 없음, JSO형태 (key, value)

> 장점 :  속도가 빠름 , 유연함
> 단점 :  데이터 일관성 보장하지 x

### MongoDB 
NoSQL의 대표적인 DB
- 문서 지향 
- node.js 호환 좋은

Document를 조회할 때 자바스크립트 Object로 바꿔주는 역할을 한다.

### ODM

Object Document Mapping
객체와 문서를 1:1로 매칭
Object : 자바스크립트 객체
Document : MongoDB 문서
