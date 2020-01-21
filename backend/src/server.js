const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();



mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-nupj4.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// req.query = acessar query params (para filtros)
// req.params = acessar route params (edicao e delete)
// req.body = acessar corpo da requisicao (criacao e edicao de registros)

app.use(cors());

app.use(express.json());

app.use('/files', express.static(path.resolve(__dirname, '..','uploads')));

// precisa vir depois do: "app.use(express.json());"
app.use(routes);

app.listen(3333);

