
import mongoose from 'mongoose';
import Game from './models/Game';
import bodyParser from 'body-parser';
import express from 'express';

var cors = require('cors');



const app = express();
app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://larpatin:lol0802@ds119258.mlab.com:19258/lassebase',  { useNewUrlParser: true })
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

app.get('/api/games', (req,res,next) => {
  Game.find((err,games) => {
    if(err)
     console.log(err)
    else{
    console.log("Games retrieved!");
      res.json(games);
    }})
})



app.get('/api/game/:id', (req,res,next) => {
  Game.findById(req.params.id, (err,game) => {
  if(err)
    console.log(err);
  else
  {
    console.log("Reutning game" + game);
    res.json(game);
  }

})
})


/*
app.route('/api/games').get((req,res) => {
    Game.find((err,games) => {
      if(err)
       console.log(err)
      else
        res.json(games);
    })
});
*/

app.route('/api/test').get((req,res) => {
  res.json("helo");
});






const httpServer = app.listen(8000, () => {
  console.log("server started at port :" + httpServer.address().port);
})
