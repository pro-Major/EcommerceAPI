const express = require('express');
const router = express.Router();

router .get('/',(req,res,next)=> {
   
    res.status(200).json({
        message : "Handling Get request Here"
        
    });
});
router.post('/',(req,res,next)=> {
    const productdata = {
        name : req.body.name,
        price : req.body.price
    };
    res.status(201).json({
        message : "Handling Post request Here",
        productdata : productdata
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