const express = require('express');

const app = express();
const fs = require('fs');

const jsonParser = express.json();

const goodsPath = 'goods.json';

app.get('/listUsers', (req, res) => {
  fs.readFile(goodsPath, 'utf8', (err, data) => {
    res.end(data);
  });
});

app.post('/addUser', jsonParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);

  const goods = JSON.parse(fs.readFileSync(goodsPath, 'utf8'));
  goods.push(req.body);

  fs.writeFileSync(goodsPath, JSON.stringify(goods));
  res.sendStatus(200);
});

app.listen(3000, () => console.log('Server work...'));
