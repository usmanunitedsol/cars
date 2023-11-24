const mongoose = require('mongoose');

const mongoURl="mongodb://0.0.0.0:27017/CarsCustom";


const  connectToMongo =async()=> {
    await mongoose.connect(mongoURl).then(()=>console.log("Connected to Mongo Successfully")).catch(err=>console.log(err));
}



module.exports=connectToMongo;