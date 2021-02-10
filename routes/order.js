const { json } = require('body-parser');
const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const { count } = require('../Models/orders');
const Order = require('../Models/orders');
const { route } = require('./products');
const NewOrder = require('../Models/orders')




//Finding All Orders 
// router.get("/", (req,res,next)=> {
//     Order.find()
//     .exec()
//     .then(document=> {res.status(200).json(document)})
//     .catch(err=> {res.status(500).json({error : err})})
   

// });
///////////////////////////////////////////////////
//Finding All orders by ID 
router.get("/:Orderid",(req,res,next)=> {
    Order.findById(req.params.Orderid)
    
    
    // .select('product quantity _id')
    .exec()
    .then(document=> {res.status(200).json({
      Fetched_Order : document,
       
    }
        
    )})
    .catch(error=> {res.status(500).json({error : error})})
  
})
///////////////////////////////////////////////////

//FInding All Orders 
router.get("/",(req,res,next)=> {
    Order.find()
    
   
    // .select('product quantity _id')
    .exec()
    .then(document=> {res.status(201).json({
        count : document.length,
        Order_Details : document.map(document =>  {
            return {
                _id : document._id,
             productName : document.productName,
             quantity : document.quantity,
                request : {
                    type : 'GET',
                    url : 'http://localhost/3200/orders/' + document._id
                }
            }
            
        })
    }
        
    )})
    .catch(error=> {res.status(500).json({error : error})})
  
})
//new Order post
router.post('/neworder',(req,res,next)=> {
    const newOrder = new NewOrder({
        _id : mongoose.Types.ObjectId(),
        productName : req.body.productName,
        price : req.body.price,
        description : req.body.description
    })
    newOrder.save()
    .then(orderdata=> {res.status(201).json({
        message : "New Order Stored",
        created_Order_Name : {
            _id : orderdata._id,
            productName : orderdata.productName,
            description : orderdata.description
        }
    })})
    .catch(error=> {res.status(500).json({error : error})});
    
})


router.post("/",(req,res,next)=> {
    const orderdata = new Order({
        _id : mongoose.Types.ObjectId(),
        productName : req.body.productName,
        quantity : req.body.quantity
    })
    orderdata.save()
    .then(results=> {res.status(201).json({
        message : "Order Stored",
        created_Order_Name : {
            _id : results._id,
            productName : results.productName,
            quantity: results.quantity
        }
    })})
    .catch(error=> {res.status(500).json({error : error})});

    
   
})
//////////////////////////////////////////////////////////
//Deleteing a Order 
router.delete('/',(req,res,next)=> {
    let deleting_Item = req.body._id
    Order.findByIdAndDelete(req.body.deleting_Item)
    .then(document=> res.status(201).json({message : "Order Deleted" , url : 'http://localhost/3200/orders/' + document._id}))
    .catch(err=> {res.status(500).json({
        error : err
    })})
})


module.exports = router;