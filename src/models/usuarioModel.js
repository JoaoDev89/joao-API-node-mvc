// src/models/usuarioModel.js
const pool = require('../config/db');

const UsuarioModel = {
  async criar(nome, email) {
    const [result] = await pool.query(
      "INSERT INTO usuarios (nome, email) VALUES (?, ?)",
      [nome, email]
    );
    return { id: result.insertId, nome, email };
  },

  async listarTodos() {
    const [rows] = await pool.query("SELECT * FROM usuarios");
    return rows;
  },

  async atualizar(id, nome, email) {
    const [result] = await pool.query(
      "UPDATE usuarios SET nome = COALESCE(?, nome), email = COALESCE(?, email) WHERE id = ?",
      [nome || null, email || null, id]
    );
    return result.affectedRows;
  },

  async deletar(id) {
    const [result] = await pool.query("DELETE FROM usuarios WHERE id = ?", [id]);
    return result.affectedRows;
  }
};

module.exports = UsuarioModel;
