import React from "react";

const TYPE_OPTIONS = [
  { value: "", label: "Todos" },
  { value: "water", label: "Agua" },
  { value: "fire", label: "Fogo" },
  { value: "grass", label: "Planta" },
  { value: "electric", label: "Eléctrico" },
  { value: "rock", label: "Pedra" },
  { value: "ground", label: "Terra" },
  { value: "normal", label: "Normal" },
  { value: "fighting", label: "Lutador" },
  { value: "steel", label: "Ferro" },
  { value: "psychic", label: "Psíquico" },
  { value: "ghost", label: "Fantasma" },
  { value: "bug", label: "Inseto" },
  { value: "poison", label: "Veneno" },
  { value: "flying", label: "Voador" },
  { value: "fairy", label: "Fada" },
  { value: "ice", label: "Gelo" },
  { value: "dragon", label: "Dragão" },
];

const TypeFilter = ({ selectedType, onChange }) => (
  <div style={{ marginBottom: 24 }}>
    <label htmlFor="type-select" style={{ marginRight: 12, fontWeight: 600, color:"#fff" }}>
      Filtrar por tipo:
    </label>
    <select
      id="type-select"
      value={selectedType}
      onChange={e => onChange(e.target.value)}
      style={{ padding: "8px 16px", borderRadius: 8, fontSize: "1rem", color: "#fff", border: "2px solid #6366f1", background: "#" }}
    >
      {TYPE_OPTIONS.map(opt => (
        <option key={opt.value} value={opt.value} style={{color: "#000"}} >{opt.label}</option>
      ))}
    </select>
  </div>
);

export default TypeFilter;
