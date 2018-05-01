// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Require path
var path = require('path');
// Static Directory
app.use(express.static(__dirname + '/angular/dist'));
//The db and routes
require('./server/config/database')
require('./server/config/routes')(app);


// CORS
// const cors = require('cors');
// app.use(cors());

// Use native promises
//mongoose.Promise = global.Promise;
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
const port = 9200;
app.listen(port, ()=> console.log(`Express server listening on port ${port}`));


