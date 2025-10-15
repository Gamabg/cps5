"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import CardList from "../componentes/CardList";
import SearchBar from "../componentes/SearchBar";
import CardSkeleton from "../componentes/CardSkeleton";
import ErrorMessage from "../componentes/ErrorMessage";
import { fetchCards } from "../componentes/api";
import TypeFilter from "../componentes/TypeFilter";

export default function Home() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // estado da busca
  const [selectedType, setSelectedType] = useState(""); // estado do filtro de tipo

  // Carrega os cards ao iniciar
  useEffect(() => {
    setLoading(true);
    fetchCards()
      .then(setCards)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Filtra os cards com base na busca e tipo
  const filteredCards = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return cards.filter((c) => {
      const matchesName = c.name?.toLowerCase().includes(query);
      const matchesType = !selectedType || c.type === selectedType;
      return matchesName && matchesType;
    });
  }, [cards, searchQuery, selectedType]);

  // Atualiza o estado de busca (sem refazer fetch)
  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  // Quando o usuário seleciona um card (pode personalizar depois)
  const handleSelect = useCallback(() => {}, []);

  return (
    <div style={{ padding: 32 }}>
      <h1>Pokémon Cards</h1>

      {/* Filtro por tipo */}
      <TypeFilter selectedType={selectedType} onChange={setSelectedType} />

      {/* Componente de busca */}
      <SearchBar onSearch={handleSearch} />

      {/* Botão para acessar a página de cadastro */}
      <button
        onClick={() => (window.location.href = "/cadastro")}
        style={{
          marginBottom: 20,
          padding: "10px 20px",
          fontSize: 16,
          borderRadius: 8,
          backgroundColor: "#6366f1",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Cadastrar-se
      </button>

      {/* Mensagem de erro */}
      {error && <ErrorMessage message={error} />}

      {/* Exibe esqueleto enquanto carrega */}
      {loading ? (
        <div style={{ display: "flex", gap: 16 }}>
          {[...Array(6)].map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      ) : (
        // Lista os cards filtrados
        <CardList cards={filteredCards} onSelect={handleSelect} />
      )}
    </div>
  );
}
