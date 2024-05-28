import React from 'react';
import styled from 'styled-components';
import { Bell } from 'styled-icons/fa-solid';
import { ArrowLeft } from 'styled-icons/fa-solid';

const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f5f5dc;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const NotificationIcon = styled(Bell)`
  position: relative;
  width: 24px;
  height: 24px;
  color: #000;
  margin-right: 10px;

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

const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;
  color: #000;
  margin-left: 10px;
`;

const Dialog = styled.div`
  background-color: #fff;
  border: 1px solid #ff7f00;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 300px;
  width: 100%;
`;

const Message = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  flex: 1;
  padding: 10px;
  border: none;
  background-color: #fff;
  color: #000;
  border-top: 1px solid #ff7f00;
  &:first-child {
    border-right: 1px solid #ff7f00;
    border-bottom-left-radius: 10px;
  }
  &:last-child {
    border-bottom-right-radius: 10px;
  }
  &:hover {
    background-color: #ffefd5;
  }
`;

const MyWidget = () => {
  return (
    <Container>
      <Header>
        <BackIcon />
        <NotificationIcon />
      </Header>
      <Dialog>
        <Message>
          “이약!” 이(가) <br />
          카메라에 접근하려고 합니다
        </Message>
        <ButtonGroup>
          <Button>취소</Button>
          <Button>허용</Button>
        </ButtonGroup>
      </Dialog>
    </Container>
  );
};

export default MyWidget;
