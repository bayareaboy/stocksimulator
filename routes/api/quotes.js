const express = require("express");
const router = express.Router();
const axios = require('axios')
const Walk = require('random-walk')
const crypto = require('crypto');
const Stocks = require('../../models/Stocks')

// router.get('/', async (req, res, next) => {

//   console.log('Hello')
//   const API_KEY = 'c32ic7iad3ieculvlt3g'
//   const TICKER = request.body.ticker
//   const config = {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }
//   try {
//     const quote = await axios.get(`https://finnhub.io/api/v1/quote?symbol=AAPL&token=${API_KEY}`, config)
//     if(!quote){
//       return res.status(404).json({msg: 'Quote is not found. Try Again.'})
//     }
//     res.json(quote)

//   } catch (err) {
//     console.error(err.message)
//     res.status(500).send('Ops. Something happened to the server. Try again later.')
//   }
// })




router.get("/", async (req, res, next) => {
  res.setHeader('Content-Type', 'application/json')


const walk = new Walk
let params = {
  pseudo: false,
  rate: {min:700, max:1400},
  type: "normal",
  base: 100,
  scale: 150
}
walk.on("result", result => {

  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
  
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
  
    return [year, month, day].join('-');
  }
var time = new Date()
var open = result + 1
var high = open + 2
var low = open - 2
var close = result + 3
var formattedTime = formatDate(time)
if(open > close){
  var increasing = 'increasing'
} else {
  var decreasing = 'decreasing'
}
  let data = new Stocks({
    open: open,
    close: close,
    high: high,
    low: low,
    time: formattedTime,
    increasing: increasing,
    decreasing: decreasing
  })
  data.save()
  console.log(data)
})
walk.get("value", params)
})

router.get('/data', async (req, res) => {
  try {
    const data = await Stocks.find().sort({date: 0});
    res.json(data)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server error')
  }
})


  // try {
  //   const API_KEY = 'HIFAX12C7Z2FYEX8'
  //   const TICKER = req.body.ticker
  //   const quote = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=1min&apikey=${API_KEY}`);
  //   res.json(quote.data)
  //   // console.log(quote.data)
  // }
  // catch (err) {
  //   next(err)
  


module.exports = router;




