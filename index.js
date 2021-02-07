//importing done here 
const express = require('express');
const app = express();
const morgan = require('morgan');
const Products = require('./routes/products')
const Orders = require('./routes/order')
// end importing 


//Inbuilt Middle ware 
app.use(express.json())
app.use(morgan('dev'));  

//end Inbuilt Middle ware 







//I still dont know why it is being used // Are bhai ye hai kya 
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









//Handling Requests for the routes 
app.use('/products', Products);
app.use('/orders', Orders)



















// Error Handling 
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
// End Error Handling 




//Export
module.exports = app; 