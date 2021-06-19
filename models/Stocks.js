const mongoose = require("mongoose");
const Schema = mongoose.Schema


const StockSchema = new mongoose.Schema({
  time: {
    type: String,
  },
  open: {
    type: Number,
  },
  close: {
    type: Number,
  },
  high: {
    type: Number,
  },
  low: {
    type: Number,
  },
  increasing: {
    type: String,
  },
  decreasing: {
    type: String,
  },


});

module.exports = Stocks = mongoose.model("stocks", StockSchema);
