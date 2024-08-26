// 모든 포켓몬을 리스트로 보여주는 컴포넌트

// import React from "react";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const PokemonList = ({ pokemonData, addPokemon }) => {
  return (
    <StCardContainer>
      {pokemonData.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          addPokemon={addPokemon}
          isSelected={false}
        />
      ))}
    </StCardContainer>
  );
};

export default PokemonList;

const StCardContainer = styled.div`
  padding: 50px 80px;
  display: flex;
  flex-wrap: wrap; /* 카드들이 넘칠 경우 자동으로 줄 바꿈 */
  gap: 10px;
  justify-content: space-between;
  background-color: rgb(240, 240, 240);
`;
