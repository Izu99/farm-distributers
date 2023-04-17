const express = require('express');
const farmerRoutes = express.Router();


let Farmer = require('./farmer.model');


//     let farmer = new Farmer(req.body);
//     farmer.save()
//         .then(Farmer => {
//             res.status(200).json({'Farmer' : 'new Farmer is added successfull'});
//         })
//         .catch(err => {
//             res.status(400).send("Unable to save database")
//         });
// });
farmerRoutes.route('/add').post(function (req,res){
    // Create a new instance of the 'Customer' model with the data from the request body
    let farmer = new Farmer(req.body);
     // Save the new customer to the database
     farmer.save()
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
farmerRoutes.route('/edit/:id').get(function (req,res){
    let id = req.params.id;
    Farmer.findById(id, function (err,Farmer){
        res.json(Farmer);
    });
});

//update Farmer details
farmerRoutes.route('/update/:id').post(function (req,res){
    let id = req.params.id;
    Farmer.findById(id, function (err, Farmer){
        if(!Farmer)
            res.status(404).send("Data is not found??");
        else{
            Farmer.vName = req.body.vName;
            Farmer.lName = req.body.lName;
            Farmer.dob = req.body.dob;
            Farmer.pNumber = req.body.pNumber;
            Farmer.uName = req.body.uName;
            Farmer.password = req.body.password;
            Farmer.email = req.body.email;
            Farmer.image = req.body.image;

         


            Farmer.save().then(business => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});

farmerRoutes.route('/delete/:id').get(function(req,res){
    Farmer.findByIdAndRemove({_id:req.params.id}, function (err, customers){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});

//get all details
// Define a route for getting all customers
farmerRoutes.route('/getall').get(function(req, res) {
    // Find all documents in the 'Customer' collection
    Farmer.find(function(err, Farmer) {
        if (err) {
            // If there was an error finding customers, log the error to the console
            console.log(err);
            // If customers were found successfully, return them as a JSON response
        } else {
            res.json(Farmer);
        }
    });
});

farmerRoutes.route('/login').post(function (req, res){
    let email = req.body.email;
    let password = req.body.password;

    let farmer = new Farmer(req.body);

    Farmer.findOne({$and:[{email : email},{password : password}]})
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


module.exports = farmerRoutes;