var express = require('express');
const app = express();
var path = require('path');
var mongoose = require('mongoose')
MONGODB_URI="mongodb://0.0.0.0:27017/movies-celebrities"

var indexRouter = require('./routes/index');
var celebritiesRouter = require('./routes/celebrities');
var moviesRouter = require('./routes/movies');



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use('/', indexRouter);
app.use('/celebrities', celebritiesRouter);
app.use('/movies', moviesRouter);





mongoose
  .connect(MONGODB_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });


module.exports = app;
