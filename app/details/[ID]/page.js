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

  const handleNavigation = (card) => {
    if (card.id) {
      router.push(`/details/${card.id}`);
    } else if (card.name) {
      router.push(`/details/${card.name}`);
    }
  };

  if (loading) return <div style={{ textAlign: "center", marginTop: "2rem" }}>Carregando...</div>;
  if (error) return <div style={{ color: "red", textAlign: "center" }}>{error}</div>;
  if (!pokemon) return null;

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", background: "#fff", borderRadius: 16, boxShadow: "0 4px 24px rgba(0,0,0,0.08)", padding: "2rem", textAlign: "center" }}>
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
        style={{ width: 180, height: 180, marginBottom: "1rem" }}
      />
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem", textTransform: "capitalize" }}>{pokemon.name}</h1>
      <div>
        <strong>Tipos:</strong>{" "}
        {pokemon.types.map((t) => (
          <span key={t.type.name} style={{ margin: "0 8px", color: "#6366f1" }}>
            {t.type.name}
          </span>
        ))}
      </div>
      <div style={{ marginTop: "1.5rem" }}>
        <strong>Status:</strong>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {pokemon.stats.map((stat) => (
            <li key={stat.stat.name} style={{ margin: "6px 0" }}>
              {stat.stat.name}: <span style={{ color: "#4338ca" }}>{stat.base_stat}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
