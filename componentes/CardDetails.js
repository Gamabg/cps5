import React from 'react';

const CardDetails = ({ card }) => {
  if (!card) return <div>Carregando...</div>;

  return (
    <div style={{ maxWidth: 400, margin: '32px auto', padding: 24, border: '1px solid #ccc', borderRadius: 12 }}>
      <img src={card.image} alt={card.name} style={{ width: '100%', borderRadius: 8 }} />
      <h2 style={{ marginTop: 16 }}>{card.name}</h2>
      <p><strong>ID:</strong> {card.id}</p>
      <p><strong>Tipo:</strong> {card.type}</p>
      <a href="/" style={{ display: 'inline-block', marginTop: 16, color: '#0070f3' }}>Voltar</a>
    </div>
  );
};

export default CardDetails;
