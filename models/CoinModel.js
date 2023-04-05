const mongoose = require('mongoose');

const coinSchema = new mongoose.Schema({
    name: String,
    last: Number,
    buy: Number,
    sell: Number,
    volume: Number,
    base_unit: String,
});


const Coin = mongoose.model('Coin', coinSchema);

module.exports = Coin;