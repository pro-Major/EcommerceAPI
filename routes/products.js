const express = require('express');
const mongoose = require('mongoose');
const Product = require('../Models/product')
const router = express.Router();

router .get('/',(req,res,next)=> {
    const id = req.parmas.id;
    Product.findById(id)
    .exec()
    .then(data=> {console.log(data)})
    .catch((err)=> console.log(error))
   
    res.status(200).json({
        message : "Handling Get request Here"
        
    });
});
router.post('/',(req,res,next)=> {
  
    const product = new Product({
         _id : mongoose.Types.ObjectId(),
         name : req.body.name,
         price : req.body.price,
    })
    product.save()
    res.status(201).json({
        message : "Handling Post request Here",
        product
    });
});
router.get('/:productId', (req,res,next)=> {
    const id = req.params.productId; {
        if(id === 'speacial') {
            res.status(200).json({
                message : 'You discovered the special ID '})
        } 
        else {
            res.status(200).json({
                message : 'You Passed an ID '
            })
        }
    }
    
})
module.exports = router;