// importando os pacotes
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

// cria um servidor express
const app = express();

/* aplica configurações para dentro do servidor,
  adicionando middlewares (body-parser, morgan, cors) */
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

/****** Gerando rotas ******/

// DB local (tempo de execução)
const data = [];

// criação de rota utilizado pelo HTTP GET/
app.get('/', (req, res) => {
  return res.json({ data });
});

// criação de rota utilizando HTTP POST/
app.post('/add', (req, res) => {
  const result = req.body;

  if(!result) {
    return res.status(400).end();
  }

  data.push(result);
  return res.json({ result });
});

// o servidor irá rodas na porta 9000
app.listen(9000, () => console.log('Express started at http://localhost:9000'));

