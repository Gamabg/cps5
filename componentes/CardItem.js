import React, { useRef } from 'react';
import { useRouter, useParams } from 'next/navigation';

const CardItem = ({ card, onSelect }) => {
  const cardRef = useRef();
  const router = useRouter();
  const { id } = useParams();

  const handleClick = () => {
    onSelect(card);
    router.push(`/details/${card.id}`);
  };

  return (
    <div
      ref={cardRef}
      style={{
        background: '#6366f1',
        borderRadius: 16,
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
        padding: 24,
        width: 240,
        margin: '16px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transition: 'box-shadow 0.3s, transform 0.2s',
        cursor: 'pointer',
      }}
    >
      <img
        src={card.image}
        alt={card.name}
        style={{
          width: 120,
          height: 120,
          objectFit: 'contain',
          borderRadius: 12,
          background: '#f3f4f6',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          marginBottom: 16,
        }}
      />
      <h3
        style={{
          fontSize: '1.25rem',
          fontWeight: 600,
          marginBottom: 8,
          textAlign: 'center',
          textTransform: 'capitalize',
          color: '#fff',
        }}
      >
        {card.name}
      </h3>
      <button
        className="card-details"
        style={{
          marginTop: '1rem',
          background: '#456f',
          color: '#fff',
          border: 'none',
          borderRadius: '0.75rem',
          padding: '0.5rem 1.5rem',
          fontSize: '1rem',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(99,102,241,0.10)',
          transition: 'background 0.2s',
        }}
        onClick={handleClick}
      >
        Ver detalhes
      </button>
    </div>
  );
};

export default CardItem;
