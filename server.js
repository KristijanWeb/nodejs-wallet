const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./config/db');
const indexRoute = require('./routes/index');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000))
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))

// Route Index
app.use('/', indexRoute);

app.listen(app.get('port'), () => {
  console.log(`listening on port http://localhost:${app.get('port')}/`)
})