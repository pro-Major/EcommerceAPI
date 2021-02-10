const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    productName : {type : mongoose.Schema.Types.ObjectId , ref : "Product" , required : true},
    quantity : {type: Number, default : 1} 

})
const NewOrderSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    productName : {type : String, required : true},
    price : {type : Number , required : true},
    description : {type : String }
})
// module.exports= mongoose.model('NewOrder',NewOrderSchema)
module.exports = mongoose.model('Order',OrderSchema)
