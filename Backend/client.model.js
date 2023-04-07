/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Client = new Schema({
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
    collation: 'client'
});

module.exports = mongoose.model('Client',Client);