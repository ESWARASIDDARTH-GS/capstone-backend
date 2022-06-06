const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  id: {
      type :Number,
      required : true},
  transaction: {
      type: String,
      required : true
  },
  amount: {
      type :Number,
      required : true},
  reciever: {
    type: String,
    required : true
},
  total: {
    type: Number,
    required : true
}
},{collection:'super-market'});

module.exports = mongoose.model("Data", dataSchema);