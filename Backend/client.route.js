const express = require('express');
const clientRoutes = express.Router();


let Client = require('./client.model');


clientRoutes.route('/add').post(function (req,res){
    // Create a new instance of the 'Customer' model with the data from the request body
    let client = new Client(req.body);
     // Save the new customer to the database
     client.save()
        .then(vehicle => {
            // If the customer was saved successfully, return a success message
            res.status(200).json({'farmer' : 'new farmer is added successfull'});
        })
        .catch(err => {
             // If there was an error saving the customer, return an error message
            res.status(400).send("Unable to save database")
        });
});


//mount Farmer details
clientRoutes.route('/edit/:id').get(function (req,res){
    let id = req.params.id;
    Client.findById(id, function (err,Farmer){
        res.json(Farmer);
    });
});

//update Farmer details
clientRoutes.route('/update/:id').post(function (req,res){
    let id = req.params.id;
    Client.findById(id, function (err, client){
        if(!client)
            res.status(404).send("Data is not found??");
        else{
            client.vName = req.body.vName;
            client.lName = req.body.lName;
            client.dob = req.body.dob;
            client.pNumber = req.body.pNumber;
            client.uName = req.body.uName;
            client.password = req.body.password;
            client.email = req.body.email;
            client.image = req.body.image;

         


            client.save().then(business => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});

clientRoutes.route('/delete/:id').get(function(req,res){
    Client.findByIdAndRemove({_id:req.params.id}, function (err, customers){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});

//get all details
// Define a route for getting all customers
clientRoutes.route('/getall').get(function(req, res) {
    // Find all documents in the 'Customer' collection
    Client.find(function(err, Farmer) {
        if (err) {
            // If there was an error finding customers, log the error to the console
            console.log(err);
            // If customers were found successfully, return them as a JSON response
        } else {
            res.json(Farmer);
        }
    });
});

clientRoutes.route('/login').post(function (req, res){
    let email = req.body.email;
    let password = req.body.password;

    let client = new Client(req.body);

    Client.findOne({$and:[{email : email},{password : password}]})
        .then(farmer => {
            if(farmer){
                farmer.name = req.body.name;
                res.status(200).send({
                    message: "Successful Login"
                });
            }
            else{
                res.status(200).send({
                    message: "User Not Found"
                });
            }
        })
});


module.exports = clientRoutes;