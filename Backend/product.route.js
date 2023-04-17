const express = require('express');
const productRoutes = express.Router();


let Product = require('./product.model');

productRoutes.route('/add').post(function (req,res){
    let product = new Product(req.body);
    product.save()
        .then(product => {
            res.status(200).json({'product' : 'new product is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});


//mount product details
productRoutes.route('/edit/:id').get(function (req,res){
    let id = req.params.id;
    Product.findById(id, function (err,product){
        res.json(product);
    });
});

//update product details
productRoutes.route('/update/:id').post(function (req,res){
    let id = req.params.id;
    Product.findById(id, function (err, product){
        if(!product)
            res.status(404).send("Data is not found??");
        else{
            product.pName = req.body.pName;
            product.sLocation = req.body.sLocation;
            product.pID = req.body.pID;
            product.customers = req.body.customers;
            product.image = req.body.image;
        

            product.save().then(business => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});

productRoutes.route('/delete/:id').get(function(req,res){
    Product.findByIdAndRemove({_id:req.params.id}, function (err, customers){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});

//get all details
// Define a route for getting all customers
productRoutes.route('/getall').get(function(req, res) {
    // Find all documents in the 'Customer' collection
    Product.find(function(err, product) {
        if (err) {
            // If there was an error finding customers, log the error to the console
            console.log(err);
            // If customers were found successfully, return them as a JSON response
        } else {
            res.json(product);
        }
    });
});

productRoutes.route('/login').post(function (req, res){
    let email = req.body.email;
    let password = req.body.password;

    let product = new Product(req.body);

    Product.findOne({$and:[{email : email},{password : password}]})
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



module.exports = productRoutes;