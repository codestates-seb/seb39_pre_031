
1. 브랜치 사용			
    ```	
     MAIN ----- -	Frontend
    (Merge)	    -	Backend
    ```	
         
2. 배포 전략	AWS EC2 Micro 1대로 사용		
    ``` 
    
    1차 목표 API Test  
    -> 백엔드	URI 전송	HelloWorld
	  ```	
      
3. Commit Convention

  1\. Commit 메시지 구조
  기본 적인 커밋 메시지 구조는 제목,본문,꼬리말 세가지 파트로 나누고, 각 파트는 빈줄을 두어 구분한다.
  ```
  type : subject

  body 

  footer
  ```
  2. Commit Type
  타입은 태그와 제목으로 구성되고, 태그는 영어로 쓰되 첫 문자는 대문자로 한다.

  태그 : 제목의 형태이며, :뒤에만 space가 있음에 유의한다.
    ```
    feat : 새로운 기능 추가
    fix : 버그 수정
    docs : 문서 수정
    style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
    refactor : 코드 리펙토링
    test : 테스트 코드, 리펙토링 테스트 코드 추가
    chore : 빌드 업무 수정, 패키지 매니저 수정
    ```
    
  예시
    ```
    Feat: "회원 가입 기능 구현"

    SMS, 이메일 중복확인 API 개발

    Resolves: #123
    Ref: #456
    Related to: #48, #45
    ```


      
	* 환경변수 	
   EC2 접속 관련 정보	
