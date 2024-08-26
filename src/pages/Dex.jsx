import { useState } from "react";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";
import DashBoard from "../components/Dashboard";
// import styled from "styled-components";

function Dex() {
  const [selectedPokemon, setSelectedPokemon] = useState([]); // 선택된 포켓몬들 리스트

  // 나만의 포켓몬으로 추가
  const addPokemon = (newPokemon) => {
    // 같은 포켓몬 찾기 (중복 검색)
    const searchPokemon = selectedPokemon.find(
      (selectedPokemon) => selectedPokemon.id === newPokemon.id
    );
    if (searchPokemon) {
      alert("이미 등록된 포켓몬입니다.");
      return;
    }
    if (selectedPokemon.length >= 6) {
      alert("포켓몬은 최대 6마리까지 선택이 가능합니다,");
      return;
    }
    setSelectedPokemon([...selectedPokemon, newPokemon]);
  };

  const removePokemon = (pokemon) => {
    // 제거는 필터를 이용해 봅시다
    const filteredPokemon = selectedPokemon.filter((selected) => {
      return selected.id !== pokemon.id;
    });
    setSelectedPokemon(filteredPokemon);
  };

  return (
    <div>
      <DashBoard
        selectedPokemon={selectedPokemon}
        removePokemon={removePokemon}
      />
      <PokemonList pokemonData={MOCK_DATA} addPokemon={addPokemon} />
    </div>
  );
}

export default Dex;
