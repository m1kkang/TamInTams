import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import Header3 from '../components/Header2';
import { getToken } from '../util/token';
import * as St from '../styles/styles';
import axios from 'axios';

export default function Floor3() {
  const navigate = useNavigate();

  const size = ['m2', 'm3', 'na2', 'na3', 'big']; // 크기 옵션: 중간세로, 중간가로, 나박스
  const color = ['green', 'yellow']; // 색상 옵션: 초록, 노랑(Nabox)

  // 로그아웃 기능 구현
  useEffect(() => {
    const token = getToken();
    if (!token) {
      navigate('/login');
    }
  }, []);

  const logOutHandler = async () => {
    try {
      await axios.post('http://3.36.132.186:3018/api/log-out');
      navigate('/login');
    } catch (error) {
      console.error('로그아웃 실패', error);
    }
  };

  return (
    <>
      <St.Button onClick={logOutHandler}>로그아웃</St.Button>
      <Header3 />
      <Floor3bg />
      <ButtonsSection>
        <Button
          size={size[1]} // m3 3층의 회의실 크기 적용
          color={color[0]} // 중간회의실 색 green 적용
        >
          협재
        </Button>
        <Button size={size[1]} color={color[0]}>
          곽지
        </Button>
        <Button size={size[1]} color={color[0]}>
          이호
        </Button>
      </ButtonsSection>
      <ButtonsSection2>
        <Button size={size[3]} color={color[1]}>
          Na1
        </Button>
        <Button size={size[3]} color={color[1]}>
          Na2
        </Button>
        <Button size={size[3]} color={color[1]}>
          Na3
        </Button>
      </ButtonsSection2>
    </>
  );
}

//스타일드 컴포넌트 백그라운드 이미지 설정
const Floor3bg = styled.div`
  background-image: url('/Floor3.png');
  height: 500px;
  background-repeat: no-repeat;
  background-size: 95%;
  margin-top: 5px;
`;

//버튼끼리 묶어주는 섹션
const ButtonsSection = styled.section`
  margin-top: -456px;
  margin-left: 815px;
  display: flex; // 요소를 가운데로 정렬
  gap: 9px; // 내부 요소 여백
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const ButtonsSection2 = styled.section`
  margin-top: -171px;
  margin-left: 440px;
  display: flex; // 요소를 가운데로 정렬
  gap: 8px; // 내부 요소 여백
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
