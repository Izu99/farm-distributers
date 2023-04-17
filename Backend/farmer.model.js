/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Farmer = new Schema({
    vName: {
        type: String
    },
    lName: {
        type: String
    },
    dob: {
        type: String
    },
    pNumber: {
        type: String
    },
    uName: {
        type: String
    }
    ,
    password: {
        type: String
    }
    ,
    email: {
        type: String
    },
    image: {
        type: String
    }

 },
  {
    collation: 'farmer'
});

module.exports = mongoose.model('Farmer',Farmer);