const express = require('express');
const inventoryRoutes = express.Router();


let Inventory = require('./inventory.model');

inventoryRoutes.route('/add').post(function (req,res){
    let inventory = new Inventory(req.body);
    inventory.save()
        .then(inventory => {
            res.status(200).json({'inventory' : 'new inventory is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

// inventoryRoutes.route('/:id').get(function (req, res){
//     let pCode = req.params.id;
//     console.log("your product code id is " +pCode);
//     Inventory.findOne({$and:[{pCode : pCode}]},function (err,std){
//         if(err)
//             console.log(err);
//         else{
//             res.json(std)
//         }
//     });

// });

inventoryRoutes.route('/edit/:id').get(function (req,res){
    let id = req.params.id;
    Inventory.findById(id, function (err,inventory){
        res.json(inventory);
    });
});

inventoryRoutes.route('/update/:id').post(function (req,res){
    let id = req.params.id;
    Inventory.findById(id, function (err, inventory){
        if(!inventory)
            res.status(404).send("Data is not found??");
        else{
            inventory.pName = req.body.pName;
            inventory.stock = req.body.stock;
            inventory.pCode = req.body.pCode;
            inventory.cost = req.body.cost;
            inventory.vender = req.body.vender;
         


            inventory.save().then(business => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});

inventoryRoutes.route('/delete/:id').get(function(req,res){
    Inventory.findByIdAndRemove({_id:req.params.id}, function (err, customers){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});

//get all details
// Define a route for getting all customers
inventoryRoutes.route('/getall').get(function(req, res) {
    // Find all documents in the 'Customer' collection
    Inventory.find(function(err, inventory) {
        if (err) {
            // If there was an error finding customers, log the error to the console
            console.log(err);
            // If customers were found successfully, return them as a JSON response
        } else {
            res.json(inventory);
        }
    });
});


module.exports = inventoryRoutes;