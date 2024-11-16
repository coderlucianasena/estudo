const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Bem-vindo ao nosso servidor Express!');
});

app.get('/api/dados', (req, res) => {
  res.json({ mensagem: 'Estes são dados da API' });
});

app.listen(3000, () => {
  console.log('Servidor Express rodando em <http://localhost:3000/>');
});


