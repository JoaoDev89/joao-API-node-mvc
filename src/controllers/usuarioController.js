// src/controllers/usuarioController.js
const UsuarioModel = require('../models/usuarioModel');

const UsuarioController = {
  async criar(req, res) {
    try {
      const { nome, email } = req.body;
      const novoUsuario = await UsuarioModel.criar(nome, email);
      res.status(201).json(novoUsuario);
    } catch (e) {
      res.status(500).json({ erro: "Falha ao criar usuário" });
    }
  },

  async listar(req, res) {
    try {
      const usuarios = await UsuarioModel.listarTodos();
      res.json(usuarios);
    } catch (e) {
      res.status(500).json({ erro: "Falha ao listar usuários" });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const { nome, email } = req.body;
      const affectedRows = await UsuarioModel.atualizar(id, nome, email);

      if (!affectedRows)
        return res.status(404).json({ erro: "Usuário não encontrado" });

      res.json({ mensagem: "Atualizado com sucesso" });
    } catch (e) {
      res.status(500).json({ erro: "Falha ao atualizar usuário" });
    }
  },

  async deletar(req, res) {
    try {
      const { id } = req.params;
      const affectedRows = await UsuarioModel.deletar(id);

      if (!affectedRows)
        return res.status(404).json({ erro: "Usuário não encontrado" });

      res.json({ mensagem: "Deletado com sucesso" });
    } catch (e) {
      res.status(500).json({ erro: "Falha ao deletar usuário" });
    }
  }
};

module.exports = UsuarioController;
