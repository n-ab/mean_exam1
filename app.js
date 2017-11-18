const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 8888;
const session = require('express-session');

const app = express();

app.use(session({secret: 'codingdojorocks'}));

app.use(express.static(path.join(__dirname, './public/dist')));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(PORT, ()=>{
  console.log(`PARTY TIME ON ${PORT}!`)
})
