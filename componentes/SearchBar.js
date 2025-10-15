import React, { useState, useCallback, useEffect, useRef } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const debounceRef = useRef();

  const handleChange = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  // Chama a busca automaticamente com debounce
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      onSearch(query);
    }, 500); // 500ms debounce
    return () => clearTimeout(debounceRef.current);
  }, [query, onSearch]);

  return (
    <form onSubmit={e => e.preventDefault()} style={{ marginBottom: 24 }}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Buscar card..."
        style={{ padding: 8, width: 200 }}
      />
    </form>
  );
};

export default SearchBar;
