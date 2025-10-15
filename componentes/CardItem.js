import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';

const CardItem = ({ card, onSelect }) => {
  const cardRef = useRef();
  const router = useRouter();

  const handleClick = () => {
    onSelect(card);
    router.push(`/details/${card.id}`);
  };

  return (
    <div
      ref={cardRef}
      style={{
        background: '#000',
        borderRadius: 20,
        boxShadow: '0 4px 24px rgba(99,102,241,0.10)',
        padding: 28,
        width: 260,
        margin: '20px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transition: 'box-shadow 0.3s, transform 0.2s',
        cursor: 'pointer',
        border: '2px solid #eef2ff',
      }}
      onMouseEnter={() => {
        cardRef.current.style.boxShadow = '0 8px 32px rgba(99,102,241,0.18)';
        cardRef.current.style.transform = 'translateY(-4px) scale(1.03)';
        cardRef.current.style.border = '2px solid #6366f1';
      }}
      onMouseLeave={() => {
        cardRef.current.style.boxShadow = '0 4px 24px rgba(99,102,241,0.10)';
        cardRef.current.style.transform = 'none';
        cardRef.current.style.border = '2px solid #eef2ff';
      }}
    >
      <img
        src={card.image}
        alt={card.name}
        style={{
          width: 120,
          height: 120,
          objectFit: 'contain',
          borderRadius: 16,
          background: '#f3f4f6',
          boxShadow: '0 2px 8px rgba(99,102,241,0.10)',
          marginBottom: 18,
        }}
      />
      <h3
        style={{
          fontSize: '1.35rem',
          fontWeight: 700,
          marginBottom: 10,
          textAlign: 'center',
          textTransform: 'capitalize',
          color: '#6366f1',
          letterSpacing: '1px',
        }}
      >
        {card.name}
      </h3>
      <button
        className="card-details"
        style={{
          marginTop: '1rem',
          background: 'linear-gradient(90deg, #6366f1 60%, #4338ca 100%)',
          color: '#fff',
          border: 'none',
          borderRadius: '0.75rem',
          padding: '0.5rem 1.5rem',
          fontSize: '1rem',
          cursor: 'pointer',
          fontWeight: 600,
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
