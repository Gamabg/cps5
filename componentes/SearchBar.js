import React, { useState, useCallback, useEffect, useRef } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const debounceRef = useRef();

  const handleChange = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      onSearch(query);
    }, 500); // 500ms debounce
    return () => clearTimeout(debounceRef.current);
  }, [query, onSearch]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '32px 0 24px 0',
        width: '100%',
      }}
    >
      <form onSubmit={e => e.preventDefault()} style={{ width: '100%', maxWidth: 340 }}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Buscar card..."
          style={{
            padding: '12px 18px',
            width: '100%',
            fontSize: '1.1rem',
            borderRadius: '1rem',
            border: '2px solid #6366f1',
            outline: 'none',
            boxShadow: '0 2px 8px rgba(99,102,241,0.10)',
            background: '#f3f4f6',
            color: '#3730a3',
            transition: 'border 0.2s, box-shadow 0.2s',
          }}
          onFocus={e => (e.target.style.border = '2px solid #4338ca')}
          onBlur={e => (e.target.style.border = '2px solid #6366f1')}
        />
      </form>
    </div>
  );
};

export default SearchBar;
