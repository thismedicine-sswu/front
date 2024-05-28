import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #fff4e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5px;
  min-height: 100vh;
`;

const SearchCamera = styled.div`
  width: 200px;
  height: 30px;
  margin-top: 40px;
  position: relative;
  display: flex; /* 아이콘과 텍스트를 수평 정렬하기 위해 flex 속성 추가 */
  align-items: center; /* 아이콘과 텍스트를 수직 정렬하기 위해 추가 */
  padding-left: 10px; /* 아이콘과 텍스트가 왼쪽에 위치하도록 왼쪽 패딩 추가 */
`;

const CameraBox = styled.div`
  background-color: #ffffff;
  width: 300px;
  height: 250px;
  margin-top: 10px;
  border: 1.5px solid #fa8100;
  border-radius: 10px;
  position: relative;
  &:first-child {
    margin-top: 5px;
  }
`;

const Box = styled.div`
  background-color: #ffffff;
  width: 300px;
  height: 80px;
  margin-top: 10px;
  border: 1.5px solid #fa8100;
  border-radius: 10px;
  position: relative;
  &:first-child {
    margin-top: 5px;
  }
`;

const Icon = styled.div`
  width: 15px;
  height: 15px;
  background-image: url(/images/search_icon.png);
  background-size: cover;
`;

const Text = styled.div`
  margin-left: 5px; /* 아이콘과 텍스트 사이의 간격 조정 */
  font-size: 15px;
`;

const Image = styled.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 100px;
  height: 55px;
  background-image: url(/images/example.png);
  background-size: cover;
`;

const Medicine = styled.div`
  position: absolute;
  left: 127px; /* 이미지 오른쪽 12px 옆으로 이동합니다. */
  top: 17px;
  font-size: 13px;
`;

export default function SearchedText() {
  return (
    <Container>
      <CameraBox />
      <SearchCamera>
        <Icon />
        <Text>사진 인식 결과입니다.</Text>
      </SearchCamera>
      <Box>
        <Image />
        <Medicine>가드메트정</Medicine>
      </Box>
    </Container>
  );
}
