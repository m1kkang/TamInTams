import styled from "styled-components";

// 로그인 페이지

export const LoginContainer1 = styled.div`
  width: 700px;
  height: 455px;
  margin: 0 auto;
  position: relative;
  border: 7px solid black;
  border-radius: 45px;
  border-width: 40px 5px 5px 5px;
  justify-content: center;
  display: grid;
  z-index: 1000;
  background-color: black;
  margin-top: 100px;
`;

export const LoginContainer2 = styled.div`
  border-width: 0px 0px 0px 0px;
  justify-content: center;
  display: grid;
  width: 689px;
  height: 454px;
  background-color: white;
  border-radius: 35px;
  margin-top: -5px;
`;

export const LoginRow1 = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

export const LoginRow2 = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 60px;
`;

export const LoginCol = styled.div`
  margin-top: 60px;
  position: relative;
  width: 400px;
  height: 400px;
`;

export const LoginAllTitle = styled.div`
  margin-top: 45px;
`;

export const LoginTitle = styled.div`
  font-weight: 500;
  font-size: 55px;
  font-weight: bold;
  text-decoration: underline;
  text-underline-offset: 7px;
  text-decoration-thickness: 2px;
  text-align: center;
  color: black;
`;

export const LoginSubTitle = styled.div`
  font-weight: 700;
  font-size: 15px;
  font-weight: border;
  color: black;
  text-align: center;
`;

export const LoginButton = styled.button`
  all: unset;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
`;

export const LoginBar = styled.div`
  font-weight: 500;
  font-size: 22px;
  color: black;
`;

export const LoginButtons = styled.div`
  display: flex;
  left: 53%;
  color: black;
  position: absolute;
  top: 140px;
`;

export const LoginText = styled.div`
  font-size: 30px;
  color: black;
`;

export const ForgetButton = styled.button`
  font-size: 14px;
  all: unset;
  cursor: pointer;
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 195px;
  left: 48%;
  font-weight: 300;
`;

export const LoginInput = styled.input`
  all: unset;
  cursor: pointer;
  margin: 0px 0 0 15px;
  width: 320px;
  height: 40px;
  font-size: 20px;
  letter-spacing: 0.15px;
  text-align: center;
  border-bottom: 3px solid;
  color: black;
  font-weight: bold;
  input:focus {
    outline: none;
    box-shadow: none !important;
  }
  &::placeholder {
    font-size: 17px;
  }
  background-color: white;
`;

// 비밀번호 관련 모달

export const PCMTitle = styled.div`
  font-weight: 400;
  font-size: 28px;
  text-align: center;
  display: flex;
  align-items: center;
  color: rgb(2, 200, 190);
  margin-top: 45px;
  max-width: 400x;
  margin-bottom: 35px;
`;

export const PCMSubTitle = styled.div`
  text-align: center;
`;

export const PCMText = styled.div``;

export const warp = styled.div`
  display: flex;
  flex-direction: column; /* 요소를 수직 방향으로 정렬합니다. */
  justify-content: space-between;
  align-items: center;
  margin-top: -15px;
`;

export const PCMInput = styled.input`
  cursor: pointer;
  width: 380px;
  height: 38px;
  font-size: 15px;
  letter-spacing: 0.15px;
  text-align: center;
  margin-left: -10px;
  border-radius: 15px;
  margin-top: -10px;
  border: 2.5px solid #000000;
`;

export const PCMRow1 = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  align-items: center;
`;

export const PCMRow2 = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  align-items: center;
`;

export const PCMRow3 = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
  align-items: center;
`;

export const PCMErrorMessage = styled.div`
  font-size: 13px;
  color: red;
  display: flex;
  z-index: 1000;
  transform: translate(2%);
  position: absolute;
  margin-top: 190px;
`;

// 회원가입 페이지

export const JoinContainer1 = styled.div`
  width: 700px;
  height: 640px;
  margin: 0 auto;
  position: relative;
  border: 10px solid black;
  border-radius: 35px;
  border-width: 40px 5px 5px 5px;
  justify-content: center;
  display: grid;
  z-index: 1000;
  background-color: black;
  margin-top: 20px;
`;

export const JoinContainer2 = styled.div`
  border-width: 30px 0px 0px 0px;
  background-color: white;
  justify-content: center;
  display: grid;
  width: 689px;
  height: 640px;
  border-radius: 30px;
  margin-top: -6px;
`;

export const Input = styled.input`
  all: unset;
  cursor: pointer;
  margin: 0px 0 0 11px;
  width: 320px;
  height: 40px;
  font-size: 25px;
  letter-spacing: 0.15px;
  text-align: center;
  border-bottom: 3px solid;
  color: black;
  font-weight: bold;
  input:focus {
    outline: none;
    box-shadow: none !important;
  }
  background-color: white;
`;
export const ErrorMessage1 = styled.div`
  font-size: 13px;
  color: red;
  transform: translate(47%);
  position: absolute;
  right: 278px;
  justify-content: flex-start;
  top: 265px;
`;

export const ErrorMessage2 = styled.div`
  font-size: 13px;
  color: red;
  transform: translate(47%);
  position: absolute;
  right: 291px;
  justify-content: flex-start;
  top: 336px;
`;
export const ErrorMessage3 = styled.div`
  font-size: 13px;
  color: red;
  transform: translate(47%);
  position: absolute;
  right: 345px;
  justify-content: flex-start;
  top: 405px;
`;

export const ErrorMessage4 = styled.div`
  font-size: 13px;
  color: red;
  transform: translate(47%);
  position: absolute;
  right: 360px;
  top: 475px;
`;

export const JoinWarpper = styled.div`
  margin-top: -30px;
  position: fixed;
`;

export const JoinRow1 = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const JoinRow2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const JoinRow3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const JoinRow4 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const JoinSubTitle = styled.div`
  font-weight: 500;
  font-size: 31px;
  font-weight: bold;
  text-decoration: underline;
  text-underline-offset: 7px;
  text-decoration-thickness: 2px;
  color: black;
  text-align: center;
`;

export const JoinTitle = styled.div`
  font-weight: 500;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  margin-top: -4px;
`;

export const JoinText = styled.div`
  font-size: 18px;
  color: black;
  width: 130px;
  text-align: center;
`;

export const JoinHeader = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
`;

export const JoinBar = styled.div`
  font-weight: 500;
  font-size: 22px;
  margin-top: 30px;
`;

export const JoinButton = styled.button`
  all: unset;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  margin-top: 35px;
`;

export const JoinButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-left: 250px;
  margin-bottom: 45px;
`;

// 2F / 3F 버튼 디자인

export const Button = styled.div`
  background-color: transparent;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;

export const HeaderWrap = styled.section`
  display: flex; //
  max-width: 1190px;
  justify-content: space-between;
  margin: auto;
  align-items: baseline;
`;

// 버튼 정렬

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 15px;
`;

export const ButtonWrapper2 = styled.div`
  display: flex;
  align-items: center;
  gap: -10px;
`;

// 회의실 버튼 디자인

export const RoomButton = styled.div`
  border-radius: 9px;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 9.5px;
  display: flex;
  &:active {
    filter: brightness(60%);
  }
`;

// 회의실 버튼 컬러

export const colorHandler = (color) => {
  switch (color) {
    case "green":
      return {
        border: "2.8px solid #222222",
        color: "#ffffff",
        backgroundColor: "#02c8be",
      };
    case "yellow":
      return {
        border: "2.2px solid #222222",
        color: "#ffffff",
        backgroundColor: "#8fdf40",
      };
    case "transparent":
      return {
        border: "2.8px solid transparent",
        color: "#ffffff",
        backgroundColor: "transparent", // 배경색을 투명으로 설정
      };
    default:
      return {};
  }
};

// 층별지도 감싸는 div

export const Mapping = styled.section`
  width: 1200px;
  height: 600px;
  margin: 0 auto;
  position: relative;
`;

// 상단 헤더 정렬

export const HeaderContainer = styled.div`
  z-index: 1;
`;
