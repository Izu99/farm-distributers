const express = require('express');
const venderRoutes = express.Router();


let Vender = require('./vender.model');

venderRoutes.route('/add').post(function (req,res){
    let vender = new Vender(req.body);
    vender.save()
        .then(vender => {
            res.status(200).json({'vender' : 'new vender is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});


//mount vender details
venderRoutes.route('/edit/:id').get(function (req,res){
    let id = req.params.id;
    Vender.findById(id, function (err,vender){
        res.json(vender);
    });
});

//update vender details
venderRoutes.route('/update/:id').post(function (req,res){
    let id = req.params.id;
    Vender.findById(id, function (err, vender){
        if(!vender)
            res.status(404).send("Data is not found??");
        else{
            vender.vName = req.body.vName;
            vender.lName = req.body.lName;
            vender.dob = req.body.dob;
            vender.pNumber = req.body.pNumber;
            vender.uName = req.body.uName;
            vender.password = req.body.password;
            vender.email = req.body.email;
            vender.image = req.body.image;

         


            vender.save().then(business => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});

venderRoutes.route('/delete/:id').get(function(req,res){
    Vender.findByIdAndRemove({_id:req.params.id}, function (err, customers){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});

//get all details
// Define a route for getting all customers
venderRoutes.route('/getall').get(function(req, res) {
    // Find all documents in the 'Customer' collection
    Vender.find(function(err, vender) {
        if (err) {
            // If there was an error finding customers, log the error to the console
            console.log(err);
            // If customers were found successfully, return them as a JSON response
        } else {
            res.json(vender);
        }
    });
});

venderRoutes.route('/login').post(function (req, res){
    let email = req.body.email;
    let password = req.body.password;

    let vender = new Vender(req.body);

    Vender.findOne({$and:[{email : email},{password : password}]})
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



module.exports = venderRoutes;