const express = require('express');
const app = express();
const port = 3000;
const files = require('./files')

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/sheet', files);

app.use('/static', express.static('static'))

app.listen(port);