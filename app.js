const express = require('express');
const path = require('path');
const app = express();
const porta = 3000;

// Comando para o Node servir o seu arquivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(porta, () => {
    console.log(`Servidor Matrix rodando em http://localhost:${porta}`);
});