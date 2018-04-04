const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;
const host = 'localhost';
const coinAPIstub = require('./../lib/coinAPIstub');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/closingprices', (req, res) => {
  console.log('GET registered');
  coinAPIstub.parseData((dataPointsAndLabels) => {
    res.status(200).send(dataPointsAndLabels);
  })
});

app.listen(port, host, () => console.log(`Listening at http://${host}:${port}`));
