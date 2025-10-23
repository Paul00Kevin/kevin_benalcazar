const express = require('express');
const app = express();

app.use(express.json());

// Ruta principal de la app
app.get('/', (req, res) => {
  res.json({ message: 'Hola desde la app de parte de Kevin Benalcazar' });
});

// Ruta para la suma
app.get('/suma', (req, res) => {
  const a = Number(req.query.a) || 0;
  const b = Number(req.query.b) || 0;
  res.json({ result: a + b });
});

module.exports = app;
