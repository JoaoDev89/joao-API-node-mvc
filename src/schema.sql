-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS sql_db;
USE sql_db;

-- Criação da tabela de usuários com chave primária autoincremento
CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserções de exemplo
INSERT INTO usuarios (nome, email) VALUES
('João Gomes', 'joao@gmail.com'),
('Maria Oliveira', 'maria@gmail.com'),
ON DUPLICATE KEY UPDATE nome = VALUES(nome);