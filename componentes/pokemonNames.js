// Lista de nomes de todos os pokémons
import axios from 'axios';

export const fetchAllPokemonNames = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=10000';
  const res = await axios.get(url);
  return res.data.results.map(p => p.name);
};
