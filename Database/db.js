const mongoose = require('mongoose');

//Connection with the Database
mongoose.connect('mongodb://localhost:27017/Ecommerce_DB',{
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(()=> {console.log("MongoDB Se Connect ho chuke hai ")}) 
  .catch((error)=> {console.log(error)}) //Kabhi kabhi error aayga fir uska kaam khatam.



  module.exports = mongoose;