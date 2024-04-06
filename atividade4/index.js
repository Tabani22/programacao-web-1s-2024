const express = require('express');
const app = express();
const calculadora = require('./util/calculadora');

app.get('/somar/:a/:b', (req, res) => {
    const resultado = calculadora.somar(parseFloat(req.params.a), parseFloat(req.params.b));
    res.send(resultado.toString());
});

app.get('/subtrair/:a/:b', (req, res) => {
    const resultado = calculadora.subtrair(parseFloat(req.params.a), parseFloat(req.params.b));
    res.send(resultado.toString());
});

app.get('/multiplicar/:a/:b', (req, res) => {
    const resultado = calculadora.multiplicar(parseFloat(req.params.a), parseFloat(req.params.b));
    res.send(resultado.toString());
});

app.get('/dividir/:a/:b', (req, res) => {
    const resultado = calculadora.dividir(parseFloat(req.params.a), parseFloat(req.params.b));
    if (resultado === 'Erro: divisão por zero') {
        res.status(400).send(resultado);
    } else {
        res.send(resultado.toString());
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});