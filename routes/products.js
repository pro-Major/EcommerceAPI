const express = require('express');
const mongoose = require('mongoose');
const Product = require('../Models/product')
const router = express.Router();

//Getting All Products 
router.get("/",(req,res,next)=> {
    Product.find()
    .select("name price id")
    .exec()
    .then(doc=> {
        const response = {
            count: doc.length,
            products : doc.map(doc=> {
                return {
                    
                    name : doc.name,
                    price: doc.price,
                    id : doc.id,
                        request: {
                            method_type : 'GET',
                            url : `http://localhost:3200/products/`+doc.id
                        }

                }

            })
        }
        res.status(200).json(response);
    })
    
    // if(true) {
    //         Product.find()
    //         .then(doc=> {res.status(200).json(doc)})
    //         .catch(err=> {console.log(`error mila bhai ${err} `)})

    // }
})

//Getting Particular Products By Id 
router.get("/:Productid",(req,res, next)=> { 
  

    // const id = req.params.Pid
    Product.findById(req.params.id)
    
    .then(doc=> {res.status(200).json(doc)})
    .catch(err=> {console.log(`error mila bhai ${err} `)}) 
    
});

router.post('/',(req,res,next)=> {
  
    const result = new Product({
         _id : mongoose.Types.ObjectId(),
         name : req.body.name,
         price : req.body.price,
    })
    result.save()
    res.status(201).json({
        message : "Created Product Sucessfully",
        Created_Product : {
            name : result.name,
            price : result.price,
            request:{
                type : "POST",
                url :  `http://localhost:3200/products/`+ result.id
            }
        }
    });
});



router.delete('/:id', (req,res) => {
let Deleted_Product = Product.findByIdAndDelete(req.params.id)
.then((results)=> {res.status(200).json(`sucessfully removed` + results)})
.catch(err=> {res.status(500).json({error : err})})
res.status(201).json({
    message : "Deleted Sucessfully",
 //Did not worked if findByIdandDelete is available   // Deleted_Item_Info : {
    //     id : Deleted_Product.id,
    //     name : Deleted_Product.name,
    //     price : Deleted_Product.price
    // }
})
});





// router.put('/:id', (req,res) => {
//     let course  = courses.find((item) => item.id === parseInt(req.params.id))
//     if(!course) {return(res.status(404).send({message : "Invalid Course ID "}))}
//     course.name = req.body.name
//     res.send(courses)
// }) 

//Patch nahi samjha to bhi dekh k likh liya baad me samjh jayga 
router.patch("/:id",(req,res,next)=> {
    
    // const _id = req.params.id;
    // const UpdatedProduct = {};
    
    // for (const Ops of req.body){UpdatedProduct[Ops.propName]=Ops.value}
    
    // Product.update({ id : _id },{$set:UpdatedProduct})
    // .exec()
    // .then(data=> {res.status(200).json(data)})
    // .error(err=> {res.status(500).json({error : err})})
   
});



module.exports = router;