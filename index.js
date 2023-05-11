const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/menu', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/menu.html'));
});

app.listen(3000, function() {
  console.log('Servidor corriendo en puerto 3000...');
});