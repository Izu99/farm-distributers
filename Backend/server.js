const express = require('express')
const app = express();
const bodyparser = require('body-parser');
const PORT = 4000;
const cors = require('cors');

const mongoose = require('mongoose');
const config = require('./DB.js');

// const studentRoutes = require('./student.route');
const inventoryRoutes = require('./inventoy.route');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, {useNewUrlParser: true}).then(
    ()=> {console.log('Database is connected')},
        err =>{console.log('Can not connect database'+err)}
);

app.use(cors());
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.use('/inventory',inventoryRoutes);
// app.use('/student',studentRoutes);

app.listen(PORT, function(){
    console.log('Server is running on port: ',PORT);
});