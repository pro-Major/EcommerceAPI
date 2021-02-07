const express = require('express');
const app = express();
const morgan = require('morgan');
const Products = require('./routes/products')
const Orders = require('./routes/order')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');









//I still dont know why it is being used
app.use((req,res,next)=> {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Acess-Control-Allow-Headers","Origin, X-Requested-with,Content-Types,Accept,Authorization"
    
    );
    if(req.method === "OPTIONS") {
        res.header('Acess-Control-Allow-Methods', 'PUT,POST,PATCH,DELECTE,GET')
    }
    next();
});
// !!!! Stile dont know why it is being used, according to the youtuber it prevents CORS errors.
app.use(morgan('dev'));  
// it did not worked dont know why 
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());
app.use(express.json())

//Handling Requests for the routes 
app.use('/products', Products);
app.use('/orders', Orders)

app.use((req,res,next)=> {
    const error = new Error('Jo Aap dhund rahe hai vo nahi mila hume');
    error.status= 404;
    next(error);
})

app.use((error,req,res,next)=> {
    res.status(error.status || 500 )
    res.json({
        error : {
            message : error.message
        }
    })
})
module.exports = app; 