import axios from 'axios';

// Busca os 151 primeiros pokémons para busca parcial local
export const fetchCards = async (query = '') => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  const res = await axios.get(url);
  const cards = await Promise.all(
    res.data.results.map(async (item) => {
      const poke = await axios.get(item.url);
      return {
        id: poke.data.id,
        name: poke.data.name,
        image: poke.data.sprites.front_default,
        type: poke.data.types[0]?.type.name || '',
      };
    })
  );
  if (query) {
    const filtered = cards.filter(card => card.name.toLowerCase().includes(query.toLowerCase()));
    if (filtered.length === 0) throw new Error('Card não encontrado');
    return filtered;
  }
  return cards;
};
