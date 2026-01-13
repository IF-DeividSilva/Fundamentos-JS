const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // faz o parse do corpo da requisição POST

app.use(bodyParser.urlencoded({ extended: true })); // configura o body-parser para interpretar dados codificados em URL

app.post('/usuarios', (req, res) => {
    console.log(req.body);
    res.send('Parabéns. Usuário incluído com sucesso!');
});

app.listen(3003, () => {
    console.log('Servidor executando na porta 3003.');
});