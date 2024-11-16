const express = require('express');
const app = express();

app.get('/usuarios', (req, res) => {
  res.json([
    {id: 1, nome: 'Alice'},
    {id: 2, nome: 'Bob'}
  ]);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
