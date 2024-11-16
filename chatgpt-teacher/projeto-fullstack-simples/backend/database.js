const sqlite3 = require('sqlite3').verbose();

// Conectar ao banco de dados (ou criar se não existir)
const db = new sqlite3.Database('./usuarios.db', (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados', err.message);
  } else {
    console.log('Conectado ao banco de dados SQLite.');
    db.run(`CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL
    )`);
  }
});

module.exports = db;