// src/routes/usuarioRoutes.js
const { Router } = require('express');
const UsuarioController = require('../controllers/usuarioController');

const router = Router();

router.post("/", UsuarioController.criar);
router.get("/", UsuarioController.listar);
router.put("/:id", UsuarioController.atualizar);
router.delete("/:id", UsuarioController.deletar);

module.exports = router;
