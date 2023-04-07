# Hello Market

본 프로젝트는 포트폴리오용으로 제작되었습니다.

[![](https://velog.velcdn.com/images/app235naver/post/713cef6b-8950-45e4-9a2b-125962cbab4a/image.png)](https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FV4am1BIL9usKKg37tXAGiV%2FUntitled%3Fnode-id%3D0%253A1%26t%3DgjE3zSCsR4abSVYV-1)

## 기술스택

Server

-   Lambda 함수, S3, dynamoDB, CloudWatch service 사용 ( 백엔드 서버 구축 및 서버 배포 후 테스트까지 시간을 최대한 줄여 필요한 Api를 빠르게 만들기 위해 사용하였습니다. )

Testing

-   Jest : React 코드를 테스트하기 위하여 사용하였습니다.

-   Faker : 백엔드 서버를 구현하기전 mock 데이터가 필요하여 사용하였습니다.

-   msw : Faker 라이브러리와 함꼐 BackEnd 서버구현하기전에 Api 통신 테스트 및 mocking을 위하여 사용하였습니다.

Client

-   Typescript : 개발중 인텔리센스 기능으로 필요한 코드를 빠르게 캐치하여 사용할 수 있고, 런타임전 빠르게 오류를 체크할 수 있어 사용하였습니다.

-   React : Angular, Vue는 Framework에 내장된 태그 속성을 통해 기능을 구현하지만, react는 javascript와 html 태그 조합으로 기능을 구현하기 때문에 좀더 친숙한 느낌을 받았습니다.

-   Redux : Global로 상태를 관리하기 위해 사용하였고, 많은 데이터를 참고해야하는 Ecommerce 사이트 특성상 모든 데이터를 한번에 관리하는 redux가 좋다고 생각하였습니다.

-   Nextjs : SSR을 사용하기위하여 사용하였습니다.

-   emotion : 컴포넌트 단위로 스타일을 가두어 특별한 스타일 적용없이 어디서든 동일한 디자인의 컴포넌트를 렌더링하기 위하여 사용하였습니다.

-   axios : Rest Api 통신을 위하여 사용하였습니다.

-   next-redux-wrapper : SSR에서 redux는 동립적이기 떄문에 서버에서 페이지 생성전 클라이언트 상태로 초기화하기 위해 사용하였습니다.

## 구현 페이지 / 기능

| 페이지           | 화면                                                                                                                                   |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 홈 페이지        | ![ezgif com-video-to-gif (6)](https://user-images.githubusercontent.com/120073917/229671658-f40bdfb2-8278-423c-82e5-92ee5a0e79ca.gif)  |
| 상품 상세 페이지 | ![ezgif com-video-to-gif (7)](https://user-images.githubusercontent.com/120073917/229676025-f4729af2-1576-4329-8b34-8098e9ec3d10.gif)  |
| 카트 페이지      | ![ezgif com-video-to-gif (8)](https://user-images.githubusercontent.com/120073917/229676923-04da1d9a-1863-4713-b1cc-3aab2d2671e9.gif)  |
| 주문 페이지      | ![ezgif com-video-to-gif (9)](https://user-images.githubusercontent.com/120073917/229681056-3b10e950-1a79-48f7-a423-add4bbd91e46.gif)  |
| 로그인 페이지    | ![ezgif com-video-to-gif (10)](https://user-images.githubusercontent.com/120073917/229843520-7eb10627-aa46-402f-ae92-c4c83189d713.gif) |
| 회원가입 페이지  | ![ezgif com-video-to-gif (12)](https://user-images.githubusercontent.com/120073917/229851605-447f798c-877a-42eb-b6ed-57b323338765.gif) |

# 고민한 부분

-   swiper : 캐러셀 및 다양한 디자인을 구현하기위해 사용하였으나, 다른 라이브러리에 비해 용량이 크고 최신버전인 9버전 기준 Jest 환경에서 모듈 시스템 이슈 발생과 모듈 사용에 있어서 타입에 제공을 해주지 않아 직접 타입을 분해 사용했습니다. <br/> - scroll lazy loading : 화면에 보이지 않는 컴포넌트는 스켈레톤 UI 처리와 `IntersectionObserver API`를 활용하여 컴포넌트가 Viewport에 설정 비율만큼 보이면 렌더링 후 메모리에서 제거하도록 하였습니다.

### TDD

테스트 대해 생각해보고 컴포넌트에서 발생할 수 있는 이벤트에 대한 테스트케이스를 최대한 작성 해보았습니다.

테스팅 환경은 Node이기 때문에 브라우저가 제공하는 window 객체의 `IntersectionObserver api`에 대한 테스트 케이스 작성을 하였습니다.

그리고 라이브러리 이슈로 테스트시 발생한 error 조치를 하였습니다.

### 접근성

시멘틱 태그를 활용하고, 접근성이 어렵거나 textContent로 이해하기 어려운 Element에는 `aria-label` 속성을 사용하여 접근성을 개선하였습니다.

그리고 children presentation role 특성을 이용할 떄는 과한 정보는 `aria-hidden` 속성을 이용하여 정보를 나타나지 않게 함으로써 복잡하지 않고 이해하기 쉽게 정보를 출력하도록 하였습니다.

자바스크립트를 활용하여 접근성도 개선하였습니다. 캐러셀 같은 슬라이더에서 이전 버튼과 다음 버튼을 누를 경우 자동으로 변경되는 케러셀 데이터에 자동적으로 포커싱을 주어 이미지를 읽도록 하였습니다.

![ezgif com-video-to-gif (5)](https://user-images.githubusercontent.com/120073917/229662435-a38a5644-2454-4d80-bcd1-03d18d9af17a.gif)
