const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
//eslint-disable-next-line no-unused-vars
const seriesRoute = require('./series.route');


mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true}).then(
    ()=> {
      // mongoose.set('useUnifiedTopology', true)
      console.log('Database is connected for reals') },
    err => { console.log('Cannot connect to the database' + err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use('/api/Series', seriesRoute);

function needInfo(req, res, next)
{
  console.log("It's happening: ", req.originalUrl);
  next();
}

app.use(needInfo);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});