// 포켓몬 상세 페이지 컴포넌트
// import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../mock";
import styled from "styled-components";

const PokemonDetail = () => {
  const navigate = useNavigate();

  // path 파라미터 사용 부분
  // const params = useParams();
  // const pokemonId = Number(params.id);
  // const selectedPokemon = MOCK_DATA.find((pokemon) => pokemon.id === pokemonId);
  // console.log(selectedPokemon);

  // Query 파라미터 사용 부분
  const [searchParams] = useSearchParams();
  const pokemonId = searchParams.get("id");
  const selectedId = Number(pokemonId);

  const selectedPokemon = MOCK_DATA.find(
    (pokemon) => pokemon.id === selectedId
  );

  console.log("pokemonId =>", pokemonId);
  console.log("selectedPokemon =>", selectedPokemon);

  const { img_url, korean_name, types, description } = selectedPokemon;

  return (
    <>
      <StDetailContainer>
        <StDetailContent>
          <StImg src={img_url} alt={korean_name} />
          <StPokemonName>{korean_name}</StPokemonName>
          <StPokemonContent>타입 : {types}</StPokemonContent>
          <StPokemonContent>{description}</StPokemonContent>
          <StAddBtn onClick={() => navigate("/dex")}>뒤로 가기</StAddBtn>
        </StDetailContent>
      </StDetailContainer>
    </>
  );
};

export default PokemonDetail;

const StDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StDetailContent = styled.div`
  width: 50%; /* 필요에 따라 너비 설정 */
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  text-align: center;
  background-color: #ffffff;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  overflow: hidden;
`;

const StImg = styled.img`
  width: 200px;
  height: 200px;
`;
const StPokemonName = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin: 0 0 20px 0;
`;

const StPokemonContent = styled.div`
  margin-bottom: 10px;
  color: #666;
  font-size: 14px;
`;

const StAddBtn = styled.button`
  width: 80px;
  height: 30px;
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
  border: none;
  background-color: #1a1a1a;
  color: rgb(255, 255, 255);
  border-radius: 5px;
  margin-bottom: 20px;
`;
