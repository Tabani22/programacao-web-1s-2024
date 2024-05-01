const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index'); // renderiza o arquivo index.ejs
});

app.post('/dados', (req, res) => {
    const { nome, endereco, telefone, data } = req.body;
    res.render('dados', { nome, endereco, telefone, data }); // renderiza o arquivo dados.ejs
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});