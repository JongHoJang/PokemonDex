import { createContext, useState } from "react";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";
import DashBoard from "../components/Dashboard";

export const DexContext = createContext();

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
    const filteredPokemon = selectedPokemon.filter((selected) => {
      return selected.id !== pokemon.id;
    });
    setSelectedPokemon(filteredPokemon);
  };

  return (
    <DexContext.Provider value={{ addPokemon, removePokemon, selectedPokemon }}>
      <DashBoard selectedPokemon={selectedPokemon} />
      <PokemonList pokemonData={MOCK_DATA} />
    </DexContext.Provider>
  );
}

export default Dex;
