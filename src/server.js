const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola desde el servidor de Kevin Benalcazar');
});

const PORT = 3000;
const server = app.listen(PORT, () => console.log(`El servidor esta escuchando en el puerto ${PORT}`));

module.exports = { app, server };


