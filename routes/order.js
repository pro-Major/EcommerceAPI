const express = require('express')
const router = express.Router();
 



router.get('/' , (req,res,next)=> {
    res.status(200).json({
        message  : 'you are in Orders menu '
    })
})





router.post('/',(req,res,next)=> {
    const orderdata=  {
        Order_name  : req.body.Order_name,
        Order_Quantity : req.body.Order_Quantity
    }
    res.status(200).json({
        message : ' thanks for posting some orders',
        orderdata : orderdata
    })
})




module.exports = router;