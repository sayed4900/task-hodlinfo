const axios = require('axios');
const Coin = require('../models/CoinModel')


exports.getCoins = async (req, res) => {
    try {
      // Fetch data from WazirX API
        const response = await axios.get('https://api.wazirx.com/api/v2/tickers');

      // Extract coin data and store in database
        const coinData =  Object.values(response.data).slice(0, 10);
        const coins = Object.keys(coinData).map((key) => {
            const { name, last, buy, sell, volume, base_unit } = coinData[key];
            return { name, last, buy, sell, volume, base_unit };
    });
    await Coin.insertMany(coins);

      // Retrieve ticker data from database and render view
        const fetchedData = await Coin.find({});
        res.render('index.ejs', { coins: fetchedData });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};