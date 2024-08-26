// 선택된 포켓몬 보여주는 컴포넌트
// import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const Dashboard = ({ selectedPokemon, removePokemon }) => {
  return (
    <div>
      <StMyPokemonContainer>
        <StMyPokemonTitle>나만의 포켓몬</StMyPokemonTitle>
        <StMyPokemonBoxContainer>
          {selectedPokemon.length === 0 ? (
            <>
              {Array.from({ length: 6 }).map((_, index) => (
                <StEmptyCard key={index}>
                  <StImgBall src="https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png" />
                </StEmptyCard>
              ))}
            </>
          ) : (
            <StPokemonCard>
              {selectedPokemon.map((pokemon) => {
                return (
                  <PokemonCard
                    key={pokemon.id}
                    pokemon={pokemon}
                    removePokemon={removePokemon}
                    isSelected={true}
                  />
                );
              })}
            </StPokemonCard>
          )}
        </StMyPokemonBoxContainer>
      </StMyPokemonContainer>
    </div>
  );
};
export default Dashboard;

const StMyPokemonContainer = styled.div`
  display: flex;
  flex-direction: column; /* 타이틀과 박스들을 세로로 나열 */
  width: 100%;
  height: 100%;
  padding: 30px 80px;
`;

const StMyPokemonTitle = styled.div`
  text-align: center;
  margin: 30px;
`;

const StMyPokemonBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

//
const StEmptyCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  width: 120px;
  height: 120px;
  background-color: #ffffff;
  border: 1px dashed rgb(221, 221, 221);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  overflow: hidden;
  padding: 10px;
`;

const StImgBall = styled.img`
  width: 50px;
`;

const StPokemonCard = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 6개 열로 균등하게 배치 */
  gap: 20px; /* 카드 사이의 간격 */
  width: 100%;
`;
