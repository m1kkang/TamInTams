import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import Header2 from "./components/Header2";

function Floor2() {
  const navigate = useNavigate(); // 페이지간 이동

  const size = ["m2", "m3", "na2", "na3"]; // 크기 옵션: 중간세로, 중간가로, 나박스
  const color = ["green", "yellow"]; // 색상 옵션: 초록, 노랑(Nabox)

  return (
    <>
      <Header2 />
      <Floor2bg />
      <ButtonsSection>
        <Button size={size[0]} color={color[0]}>
          협재
        </Button>
        <Button
          size={size[0]} // m2 2층의 회의실 크기 적용
          color={color[0]} // 중간회의실 색 green 적용
        >
          곽지
        </Button>
        <Button size={size[0]} color={color[0]}>
          이호
        </Button>
        <Button size={size[0]} color={color[0]}>
          함덕
        </Button>
        <Button size={size[0]} color={color[0]}>
          월평
        </Button>
        <Button size={size[0]} color={color[0]}>
          김녕
        </Button>
        <Button size={size[0]} color={color[0]}>
          신양
        </Button>
      </ButtonsSection>
      <ButtonsSection>
        <Button size={size[0]} color={color[0]}>
          투명처리
        </Button>
        <Button size={size[0]} color={color[0]}>
          하모
        </Button>
        <Button size={size[0]} color={color[0]}>
          화순
        </Button>
        <Button size={size[0]} color={color[0]}>
          중문
        </Button>
        <Button size={size[0]} color={color[0]}>
          표선
        </Button>
        <Button size={size[2]} color={color[1]}>
          Na1
        </Button>
        <Button size={size[2]} color={color[1]}>
          Na2
        </Button>
        <Button size={size[2]} color={color[1]}>
          Na3
        </Button>
      </ButtonsSection>
    </>
  );
}

export default Floor2;

//스타일드 컴포넌트 백그라운드 이미지 설정
const Floor2bg = styled.div`
  background-image: url("/Floor2.png");
  height: 500px;
  background-repeat: no-repeat;
  background-size: 95%;
  margin-top: 5px;
`;

//버튼끼리 묶어주는 섹션
const ButtonsSection = styled.section`
  margin-top: 1px;
  display: flex; // 요소를 가운데로 정렬
  gap: 15px; // 내부 요소 여백
  align-items: baseline;
`;

// 2F / 3F 버튼 설정
const FloorButton = styled.div`
  background-color: transparent;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;
