"use client";

import { useState, useEffect, useCallback } from 'react';
import CardList from '../componentes/CardList';
import SearchBar from '../componentes/SearchBar';
import CardSkeleton from '../componentes/CardSkeleton';
import ErrorMessage from '../componentes/ErrorMessage';
import { fetchCards } from '../componentes/api';

export default function Home() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    fetchCards()
      .then(setCards)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleSearch = useCallback((query) => {
    setLoading(true);
    setError('');
    fetchCards(query)
      .then(setCards)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleSelect = useCallback(() => {}, []);

  return (
    <div style={{ padding: 32 }}>
      <h1>Pokémon Cards</h1>
      <SearchBar onSearch={handleSearch} />
      
      {error && <ErrorMessage message={error} />}
      {loading ? (
        <div style={{ display: 'flex', gap: 16 }}>
          {[...Array(6)].map((_, i) => <CardSkeleton key={i} />)}
        </div>
      ) : (
        <CardList cards={cards} onSelect={handleSelect} />
      )}
    </div>
  );
}