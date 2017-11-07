var mongoose = require('mongoose');
var os = require('os');

var port = process.env.DB_PORT || '27017';
var host = 'database';
var mongo_user = process.env.MONGO_DB_USER || '';
var mongo_db = process.env.MONGO_DATABASE || '';

var url = 'mongodb://storage/myapp'
console.log("Connected to MongoDB to: " + url);
/**
 * Initialize the connection.
 * @method init
 **/
mongoose.connect(url, {
    useMongoClient: true,
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected to MongoDB to: " + url);
});

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send("<h1>I'm "+os.hostname()+"</h1>\n");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
