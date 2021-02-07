const express = require('express');
const mongoose = require('mongoose');
const Product = require('../Models/product')
const router = express.Router();


router.get("/",(req,res,next)=> {
    if(true) {
            Product.find()
            .then(doc=> {res.status(200).json(doc)})
            .catch(err=> {console.log(`error mila bhai ${err} `)})

    }
})

router.get("/:Pid",(req,res, next)=> {
    
    const id = req.params.Pid
        Product.findById(id)
    .then(doc=> {res.status(200).json(doc)})
    .catch(err=> {console.log(`error mila bhai ${err} `)})
    
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



router.delete('/:id', (req,res) => {

Product.findByIdAndRemove(req.params.id)
.then((results)=> {res.status(200).json(`sucessfully removed` + results)})
.catch(err=> {res.status(500).json({error : err})})
});



// router.put('/:id', (req,res) => {
//     let course  = courses.find((item) => item.id === parseInt(req.params.id))
//     if(!course) {return(res.status(404).send({message : "Invalid Course ID "}))}
//     course.name = req.body.name
//     res.send(courses)
// }) 








module.exports = router;