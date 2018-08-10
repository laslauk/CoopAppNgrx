import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Game = new Schema({

  title: {
    type: String
},
price: {
    type: Number
},

steamUrl: {
  type: String
},

status: {
    type: String,
    default: 'Unfinished'
}

});

export default mongoose.model('Game', Game);
