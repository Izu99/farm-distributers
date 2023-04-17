/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Product = new Schema({
    pName: {
        type: String
    },
    sLocation: {
        type: String
    },
    pID: {
        type: String
    },
    customers: {
        type: String
    },
    image: {
        type: String
    }

 },
  {
    collation: 'product'
});

module.exports = mongoose.model('Product',Product);