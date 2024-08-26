import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { DexContext } from "../pages/Dex";
import { useContext } from "react";

const Dashboard = () => {
  const { selectedPokemon } = useContext(DexContext);

  return (
    <div>
      <StMyPokemonContainer>
        <StMyPokemonTitle>나만의 포켓몬</StMyPokemonTitle>
        <StMyPokemonBoxContainer>
          {Array.from({ length: 6 }).map((_, index) => {
            const pokemon = selectedPokemon[index];

            return pokemon ? (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                isSelected={true}
              />
            ) : (
              <StEmptyCard key={`empty-${index}`}>
                <StImgBall src="https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png" />
              </StEmptyCard>
            );
          })}
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
