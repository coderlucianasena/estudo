const express = require('express');
const db = require('./database');
const app = express();
const port = 3000;

app.use(express.json());

// Create
app.post('/usuarios', (req, res) => {
  const { nome, email } = req.body;
  db.run('INSERT INTO usuarios (nome, email) VALUES (?, ?)', [nome, email], function(err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID, nome, email });
  });
});

// Read
app.get('/usuarios', (req, res) => {
  db.all('SELECT * FROM usuarios', [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Update
app.put('/usuarios/:id', (req, res) => {
  const { nome, email } = req.body;
  db.run('UPDATE usuarios SET nome = ?, email = ? WHERE id = ?', [nome, email, req.params.id], function(err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ message: "Usuário atualizado", changes: this.changes });
  });
});

// Delete
app.delete('/usuarios/:id', (req, res) => {
  db.run('DELETE FROM usuarios WHERE id = ?', req.params.id, function(err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ message: "Usuário deletado", changes: this.changes });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});