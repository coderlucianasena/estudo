const express = require('express');
const app = express();

app.use(express.json()); // Para parsing de JSON no body

// Create (Criar)
app.post('/usuarios', (req, res) => {
  // Aqui você normalmente interagiria com um banco de dados
  res.json({mensagem: 'Usuário criado com sucesso'});
});

// Read (Ler)
app.get('/usuarios/:id', (req, res) => {
  // Aqui você buscaria o usuário no banco de dados
  res.json({id: 1, nome: 'Alice'});
});

// Update (Atualizar)
app.put('/usuarios/:id', (req, res) => {
  // Aqui você atualizaria o usuário no banco de dados
  res.json({mensagem: 'Usuário atualizado com sucesso'});
});

// Delete (Deletar)
app.delete('/usuarios/:id', (req, res) => {
  // Aqui você deletaria o usuário do banco de dados
  res.json({mensagem: 'Usuário deletado com sucesso'});
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
