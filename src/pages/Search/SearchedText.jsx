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

const SearchText = styled.div`
  width: 200px;
  height: 30px;
  margin-top: 10px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const Box = styled.div`
  background-color: #ffffff;
  width: 300px;
  height: 105px; /* Adjusted height to accommodate the orange box */
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
  left: 127px;
  top: 25px;
  font-size: 12px;
`;

const TagBox = styled.div`
  position: absolute;
  left: 127px;
  top: 40px;
  margin-top: 9px;
  width: 50px;
  height: 25px;
  background-color: #fa8100;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 10px;
`;

export default function SearchedText() {
  return (
    <Container>
      <SearchText>
        <Icon />
        <Text>당뇨 검색 결과입니다.</Text>
      </SearchText>
      <Box>
        <Image />
        <Medicine>가드메트정</Medicine>
        <TagBox>당뇨병</TagBox>
      </Box>
      <Box>
        <Image />
        <Medicine>그린페지정(메트포르민염산염)</Medicine>
        <TagBox>당뇨병</TagBox>
      </Box>
      <Box>
        <Image />
        <Medicine>그루리스엠정</Medicine>
        <TagBox>당뇨병</TagBox>
      </Box>
      <Box>
        <Image />
        <Medicine>글라포민에스알정</Medicine>
        <TagBox>당뇨병</TagBox>
      </Box>
      <Box>
        <Image />
        <Medicine>글루코파지정</Medicine>
        <TagBox>당뇨병</TagBox>
      </Box>
    </Container>
  );
}
