const mongoose = require('mongoose');
const Schema=mongoose.Schema;
mongoose.connect();

gameSchema=new Schema({
    gameTitle:String,
    gameDescription:String,
    gameImage:String,
    gameID:number,
})

const Game=mongoose.model('Game',gameSchema);

module.exports=Game;