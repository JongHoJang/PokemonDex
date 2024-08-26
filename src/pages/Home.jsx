// import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <StHome>
        <StImg
          src="https://react-6-pokemon.vercel.app/assets/pokemon-logo-RN0wntMB.png"
          alt="포켓몬스터 로고"
        />
        <StStartBtn onClick={() => navigate("/dex")}>
          포켓몬 도감 시작하기
        </StStartBtn>
      </StHome>
    </>
  );
}

export default Home;

const StHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const StImg = styled.img`
  width: 400px;
`;

const StStartBtn = styled.button`
  width: 160px;
  height: 40px;
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  background-color: rgb(255, 0, 0);
  color: rgb(255, 255, 255);
  border-radius: 5px;
`;
