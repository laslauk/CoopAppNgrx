
import mongoose from 'mongoose';
import Game from './models/Game';
import bodyParser from 'body-parser';
import express from 'express';

const app = express();
app.use(bodyParser.json());


mongoose.connect('sunmutsis',  { useNewUrlParser: true })
const connection = mongoose.connection;


var ObjectID = require('mongodb').ObjectID;

  var fillGame = new Game({
    _id: new ObjectID(),
    title: 'Metal Gear',
    price: 50,
    steamUrl: 'https://www.google.fi/',
    status: 'Finished'
})



connection.once('open', () => {
  console.log('MongoDB database established succesfully');
});

// fillGame.save();





app.route('/api/test').get((req,res) => {
  res.json("helo");
});






const httpServer = app.listen(8000, () => {
  console.log("server started at port :" + httpServer.address().port);
})
