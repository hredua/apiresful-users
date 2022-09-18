require('dotenv').config();
var cors = require('cors');
var express = require('express');
const apiSecret = process.env.DATABASE_URL;
app = express();
app.use(cors())
port = process.env.PORT || 3000;
mongoose = require('mongoose')
Personagem = require('./api/models/usuarioModel');
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://${apiSecret}@cluster0.rimu3bx.mongodb.net/?retryWrites=true&w=majority`)

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/usuarioRoutes');
routes(app);


app.listen(port);