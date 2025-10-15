import React, { useMemo } from 'react';
import CardItem from './CardItem';

const CardList = ({ cards, onSelect }) => {
  // useMemo para otimizar renderização dos cards
  const renderedCards = useMemo(() =>
    cards.map(card => (
      <CardItem key={card.id} card={card} onSelect={onSelect} />
    ))
  , [cards, onSelect]);

  return <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>{renderedCards}</div>;
};

export default CardList;
