"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";

export default function PokemonDetails() {
  const { id } = useParams();
  const router = useRouter();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokemon(res.data))
      .catch(() => setError("Pokémon não encontrado"))
      .finally(() => setLoading(false));
  }, [id]);

  const handleClick = () => {
    router.push(`/`);
  };

  if (loading) return <div style={{ textAlign: "center", marginTop: "2rem" }}>Carregando...</div>;
  if (error) return <div style={{ color: "red", textAlign: "center" }}>{error}</div>;
  if (!pokemon) return null;

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "2rem auto",
        background: "#fff",
        borderRadius: 24,
        boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
        padding: "2rem",
        display: "flex",
        gap: "2rem",
        alignItems: "center",
      }}
    >
      {/* Imagem à esquerda */}
      <div style={{ flex: "0 0 220px", textAlign: "center" }}>
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          style={{
            width: 200,
            height: 200,
            objectFit: "contain",
            borderRadius: "16px",
            background: "#f3f4f6",
            boxShadow: "0 2px 8px rgba(99,102,241,0.10)",
            marginBottom: "1rem",
          }}
        />
        <button
          style={{
            marginTop: "1rem",
            background: "#6366f1",
            color: "#fff",
            border: "none",
            borderRadius: "0.75rem",
            padding: "0.5rem 1.5rem",
            fontSize: "1rem",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(99,102,241,0.10)",
            transition: "background 0.2s",
          }}
          onClick={handleClick}
        >
          Voltar para Home
        </button>
      </div>
      {/* Informações à direita */}
      <div style={{ flex: 1 }}>
        <h1
          style={{
            fontSize: "2.5rem",
            marginBottom: "1rem",
            textTransform: "capitalize",
            color: "#6366f1",
            letterSpacing: "1px",
          }}
        >
          {pokemon.name}
        </h1>
        <div style={{ marginBottom: "1.5rem" }}>
          <strong>Tipos:</strong>{" "}
          {pokemon.types.map((t) => (
            <span
              key={t.type.name}
              style={{
                margin: "0 8px",
                color: "#fff",
                background: "#6366f1",
                borderRadius: "8px",
                padding: "2px 12px",
                fontWeight: "bold",
                fontSize: "1rem",
                boxShadow: "0 1px 4px rgba(99,102,241,0.10)",
              }}
            >
              {t.type.name}
            </span>
          ))}
        </div>
        <div>
          <strong>Status:</strong>
          <ul style={{ listStyle: "none", padding: 0, marginTop: "0.5rem" }}>
            {pokemon.stats.map((stat) => (
              <li
                key={stat.stat.name}
                style={{
                  margin: "8px 0",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.05rem",
                }}
              >
                <span style={{ width: 120, textTransform: "capitalize", color: "#374151" }}>
                  {stat.stat.name}
                </span>
                <span
                  style={{
                    color: "#4338ca",
                    fontWeight: "bold",
                    marginLeft: "12px",
                    background: "#eef2ff",
                    borderRadius: "6px",
                    padding: "2px 10px",
                  }}
                >
                  {stat.base_stat}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
