# 🔥 개인 블로그 프로젝트

- 개인 종합 블로그 프로젝트
- express, javascript 함수화를 사용해서 기본 서버구현
- 3 layed 아키텍처 패턴 (controller, service, repository)
- 서버실행 npm run start:dev
- 기능에 문제 없는 선에서, 최대한 간결하게

<br>

# 🔥 ERD

![ERD](https://)

1. users : 유저
2. posts : 게시글
3. categories : 게시글 카테고리
4. subCategories : 카테고리 내 서브 카테고리
5. images : 이미지 관련
6. views : 조회수 관련

<br>

# 🔥 api 가이드 (/api)

### user (유저)

1. 회원가입 (POST) = /user/register
2. 로그인 (POST) = /user/login
3. 회원정보 (GET) = /user/userInfo
4. 유저상태 수정 (PUT) = /user/status
5. 로그아웃 (post) = /user/logout
6. 로그아웃 확인 (GET) = /user/check

### category (게시판 카테고리)

1. 생성 (POST) = /category
2. 조회 (GET) = 전체 : /category , 특정 : /category/:id
3. 수정 (PUT) = /category/:id
4. 삭제 (DELETE) = /category/:id

### subcategory (카테고리 내 서브카테고리)

1. 생성 (POST) = /subCategory
2. 조회 (GET) = 전체 : /subCategory , 특정 : /subCategory/:categoryId
3. 수정 (PUT) = /subCategory/:id
4. 삭제 (DELETE) = /subCategory/:id

### post (게시글)

1. 생성 (POST) = /post
2. 조회 (GET) = 전체 : /post , 특정 : /post/:id
3. 수정 (PUT) = /post/:id
4. 삭제 (DELETE) = /post/:id

### image (이미지)

1. 업로드 (POST) = /image
2. 불러오기 (GET) = /:id

<br>

<br>

# 🔥 주요기능

# 🔥 기술적 의사결정

# 🔥 에러 핸들링

# 🔥 폴더 구조
