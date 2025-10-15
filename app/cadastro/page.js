"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CadastroPage() {
  const [form, setForm] = useState({ nome: "", email: "", senha: "" });
  const [msg, setMsg] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nome || !form.email || !form.senha) {
      setMsg("Preencha todos os campos!");
      return;
    }
    setMsg("Cadastro realizado com sucesso!");
    setTimeout(() => {
      router.push(`/`);
    }, 1500);
  };

  return (
    <div style={{
      maxWidth: 400,
      margin: "2rem auto",
      background: "#000",
      borderRadius: 16,
      boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
      padding: "2rem",
      textAlign: "center"
    }}>
      <h1 style={{ marginBottom: "1.5rem" }}>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={handleChange}
          style={{ width: "100%", padding: "0.75rem", marginBottom: "1rem", borderRadius: "0.5rem", border: "1px solid #ccc" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={{ width: "100%", padding: "0.75rem", marginBottom: "1rem", borderRadius: "0.5rem", border: "1px solid #ccc" }}
        />
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={form.senha}
          onChange={handleChange}
          style={{ width: "100%", padding: "0.75rem", marginBottom: "1rem", borderRadius: "0.5rem", border: "1px solid #ccc" }}
        />
        <button
          type="submit"
          style={{
            background: "#6366f1",
            color: "#fff",
            border: "none",
            borderRadius: "0.75rem",
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            cursor: "pointer"
          }}
        >
          Cadastrar-se
        </button>
      </form>
      {msg && <div style={{ marginTop: "1rem", color: "#6366f1" }}>{msg}</div>}
    </div>
  );
}