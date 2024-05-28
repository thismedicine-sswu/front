import React from 'react'; //React 라이브러리 가져옴
import {
  Container,
  Header,
  Greeting,
  Email,
  Stats,
  Stat,
  StatValue,
  Menu,
  MenuItem,
  Footer,
  FooterButton,
  NotificationIcon,
  ProfileIcon,
  Divider
} from './MyPage.styles'; //MyPage.styles.jsx. 파일에서 스타일링된 컴포넌트를 가져옴

const MyPage = () => { //MyPage 컴포넌트 정의 시작
  return (
    <Container> // 전체 페이지를 감싸는 컨테이너
      <Header> // 헤더 섹션
        <NotificationIcon>
          <span>1</span> // 알림 아이콘에 알림 개수 표시
        </NotificationIcon>
        <ProfileIcon /> //프로필 아이콘
      </Header>
      <Greeting>슬라임님, 안녕하세요.</Greeting> // 인사말
      <Email>lub1733@gmail.com</Email> // 이메일 주소 표시
      <Stats> //통계 섹션
        <Stat>
          <StatValue>0</StatValue> // 단어 개수
          단어
        </Stat>
        <Stat>
          <StatValue>0</StatValue> // 사진 개수 
          사진
        </Stat>
      </Stats>
      <Divider /> // 구분선
      <Menu> // 메뉴 섹션 
        <MenuItem>복용 약 기록</MenuItem> // 메뉴 항목
        <MenuItem>회원정보 수정</MenuItem> // 메뉴 항목
        <Divider /> // 구분선
        <MenuItem>1:1 문의</MenuItem> // 메뉴 항목
        <MenuItem>공지사항</MenuItem> // 메뉴 항목
        <MenuItem>이용약관</MenuItem> // 메뉴 항목
        <MenuItem>개인정보 처리방침</MenuItem> // 메뉴 항목
        <Divider /> // 구분선
        <MenuItem>기타</MenuItem> // 메뉴 항목 
        <MenuItem>로그아웃</MenuItem> // 메뉴 항목
      </Menu>
      <Footer> // 푸터 섹션
        <FooterButton>홈화면</FooterButton> // 푸터 버튼
        <FooterButton active>약</FooterButton> // 활성화된 푸터 버튼
        <FooterButton>사진 인식</FooterButton> // 푸터 버튼 
        <FooterButton>내정보</FooterButton> // 푸터 버튼
      </Footer>
    </Container>
  );
};

export default MyPage; //MyPage 컴포넌트를 기본으로 내보냄
