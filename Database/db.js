const mongoose = require('mongoose');

//Connection with the Database
mongoose.connect('mongodb+srv://admin:admin@cluster0.4gjqy.mongodb.net/test', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(()=> {console.log("Sucessfully Connected to Database")}) 
  .catch((error)=> {console.log(error)}) //Kabhi kabhi error aayga fir uska kaam khatam.



  module.exports = mongoose;