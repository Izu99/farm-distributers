/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Inventory = new Schema({
    pName: {
        type: String
    },
    stock: {
        type: String
    },
    pCode: {
        type: String
    },
    cost: {
        type: String
    },
    vender: {
        type: String
    }

 },
  {
    collation: 'inventory'
});

module.exports = mongoose.model('Inventory',Inventory);