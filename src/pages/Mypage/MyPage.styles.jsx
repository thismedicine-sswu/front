import styled from 'styled-components'; //styled-component 라이브러리를 임포트함
import { Bell, UserCircle } from 'styled-icons/fa-solid'; // styled-icons 라이브러리에서 Bell과 UserCircle 아이콘을 임포트함

export const Container = styled.div` //Container 컴포넌트를 스타일링함
  font-family: Arial, sans-serif; //폰트 패밀리를 Arial, sana-serif로 설정함
  background-color: #f5f5dc; //배경색을 연한 베이지색으로 설정
  color: #000; //텍스트 색상을 검정색으로 설정
  padding: 10px; //모든 면에 10px의 패딩을 줌
`;

export const Header = styled.div` //Header 컴포넌트를 스타일링함
  display: flex; // flexbox 레이아웃을 사용함
  justify-content: space-between; // 자식요소들을 양 끝에 배치
  align-items: center; // 자식요소들을 세로축 가운데에 정렬함 
  padding: 10px 0; // 위아래로 10px의 패딩을 줌
`;

export const Greeting = styled.h1` // Greeting 컴포넌트를 스타일링함
  font-size: 18px; // 폰트 크기를 18px로 설정함
  margin: 10px 0; // 위아래로 10px의 마진을 줌
`;

export const Email = styled.p` // Email 컴포넌트를 스타일링함
  font-size: 14px; // 폰트 크기를 14px로 설정함
  color: #555; //텍스트 색상을 회색으로 설정
`;

export const Stats = styled.div` //Stats 캄포넌트 스타일링
  display: flex; //flexbox 레이아웃 사용
  justify-content: space-around; // 자식 요소들을 공간을 균등하게 나눠서 배치
  margin: 20px 0; //위아래로 20px의 마진을 줌
`;

export const Stat = styled.div` // Stat 컴포넌트를 스타일링함
  text-align: center; //텍스트를 가운데 정렬함
`;

export const StatValue = styled.div` //StatValue 컴포넌트를 스타일링함
  font-size: 24px; //폰트 크기를 24px로 설정함
  color: #ff7f00; //텍스트 색상을 주황색으로 설정함
`;

export const Menu = styled.div` // Menu 컴포넌트 스타일링
  margin: 20px 0; // 위아래로 20px의 마진을 줌
`;

export const MenuItem = styled.div` // MenuItem 컴포넌트를 스타일링함
  padding: 15px 10px; // 상하로 15px. 좌우로 10px의 패딩을 줌
  border-bottom: 1px solid #ddd; //아래쪽에 연한 회색의 1px 두께의 테두리 추가함
  display: flex; // flexbox 레이아웃 사용
  justify-content: space-between; // 자식 요소둘은 양 끝에 배치함
  align-items: center; // 자식 요소들을 세로축 가운데에 정렬함
  &:hover {
    background-color: #ffefd5; // 마우스를 올렸을 때 배경색울 연한 주황색으로 변경 
  }
`;

export const Divider = styled.div` //Divider 컴포넌트 스타일링
  height: 10px; // 높이를 10px로 설정
  background-color: #f0e68c; //배경색을 연한 노란색으로
`;

export const Footer = styled.div` //footer 
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  background-color: #fff8dc;
  border-top: 1px solid #ddd;
`;

export const FooterButton = styled.button`
  flex: 1;
  padding: 10px;
  border: none;
  background-color: ${({ active }) => (active ? '#ff4500' : '#ffefd5')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  &:not(:last-child) {
    border-right: 1px solid #ddd;
  }
`;

export const NotificationIcon = styled(Bell)`
  position: relative;
  width: 24px;
  height: 24px;
  color: #000;
  &:after {
    content: '1';
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: red;
    color: white;
    border-radius: 50%;
    padding: 2px 5px;
    font-size: 10px;
  }
`;

export const ProfileIcon = styled(UserCircle)`
  width: 24px;
  height: 24px;
  color: #000;
`;

export default {
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
};
