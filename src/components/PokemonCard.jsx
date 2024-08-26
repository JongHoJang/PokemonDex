// 개별 포켓몬의 정보를 카드 형식으로 보여주는 컴포넌트
// import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { DexContext } from "../pages/Dex";

const PokemonCard = ({ pokemon, isSelected }) => {
  const { img_url, korean_name, id } = pokemon;
  const navigate = useNavigate();

  const { addPokemon, removePokemon } = useContext(DexContext);

  const handlerAddPokemon = (e) => {
    addPokemon(pokemon);
    e.stopPropagation();
  };

  const handlerDeletePokemon = (e) => {
    removePokemon(pokemon);
    e.stopPropagation();
  };

  const handlerCardDetail = () => {
    navigate(`/dex-detail?id=${pokemon.id}`);
  };

  return (
    <>
      <StCard onClick={handlerCardDetail}>
        <StImg src={img_url} alt={korean_name} />
        <StPokemonName>{korean_name}</StPokemonName>
        <StPokemonId>No. {String(id).padStart(3, "0")}</StPokemonId>
        {isSelected ? (
          <StDeleteBtn onClick={handlerDeletePokemon}> 삭제 </StDeleteBtn>
        ) : (
          <StAddBtn onClick={handlerAddPokemon}>추가</StAddBtn>
        )}
      </StCard>
    </>
  );
};

export default PokemonCard;

// st

const StCard = styled.div`
  width: 180px;
  height: 220px;
  background-color: #ffffff;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  overflow: hidden;
  text-align: center;
  padding: 10px;
`;

const StImg = styled.img`
  width: 100px;
  height: 100px;
`;

const StPokemonName = styled.div``;

const StPokemonId = styled.div`
  font-size: 12px;
  color: rgb(102, 102, 102);
  display: block;
  margin-top: 10px;
`;

const StAddBtn = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
  border: none;
  background-color: rgb(255, 0, 0);
  color: rgb(255, 255, 255);
  border-radius: 5px;
`;

const StDeleteBtn = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
  border: none;
  background-color: rgb(255, 0, 0);
  color: rgb(255, 255, 255);
  border-radius: 5px;
`;
