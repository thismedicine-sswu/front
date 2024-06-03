import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #fff4e0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const BoxStyled = styled.div`
  background-color: #ffffff;
  width: 300px;
  height: 312px;
  border-radius: 10px;
  border: 1.5px solid #fa8100;
  position: relative;
`;

const LineOrange = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 1.5px;
  background-color: #fa8100;
  top: ${props => props.top}px;
`;

const LineBlack = styled.div`
  position: absolute;
  left: 10px;
  width: calc(100% - 20px);
  height: 1.5px;
  background-color: black;
  top: ${props => props.top}px;
`;

const Text = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  font-size: 15px;
  font-weight: 800;
`;

const MagnifyingGlass = styled.img`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 25px;
  height: 25px;
`;

const Label = styled.div`
  position: absolute;
  left: 20px;
  top: calc(${props => props.top}px - 8px);
  font-family: 'Pretendard Medium', sans-serif;
  font-size: 16px;
  color: black;
  text-align: left;
`;

const ColorBox = styled.div`
  position: absolute;
  left: calc(100% - 70px);
  top: calc(${props => props.top}px - 8px);
  width: 50px;
  height: 24px;
  background-color: #fa8100;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ColorBoxText = styled.div`
  font-family: 'Pretendard Medium', sans-serif;
  font-size: 12px;
  color: white;
`;

const MoreLabel = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
  font-family: 'Pretendard Medium', sans-serif;
  font-size: 16px;
  color: #878787;
`;

const Search = () => {
  return (
    <Container>
      <BoxStyled>
        <Text>당뇨</Text>
        <MagnifyingGlass src="/images/search_icon.png" alt="돋보기 아이콘" />
        <LineOrange top={54} />
        <Label top={79}>가드메트정</Label>
        <ColorBox top={75}>
          <ColorBoxText>당뇨병</ColorBoxText>
        </ColorBox>
        <LineBlack top={104} />
        <Label top={129}>그린페지정(메트포르민염산염)</Label>
        <ColorBox top={125}>
          <ColorBoxText>당뇨병</ColorBoxText>
        </ColorBox>
        <LineBlack top={154} />
        <Label top={179}>그루리스엠정</Label>
        <ColorBox top={175}>
          <ColorBoxText>당뇨병</ColorBoxText>
        </ColorBox>
        <LineBlack top={204} />
        <Label top={229}>글라포민에스알정</Label>
        <ColorBox top={225}>
          <ColorBoxText>당뇨병</ColorBoxText>
        </ColorBox>
        <LineBlack top={254} />
        <MoreLabel>더보기</MoreLabel>
      </BoxStyled>
    </Container>
  );
};

export default Search;
