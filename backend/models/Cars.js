const mongoose = require("mongoose");
const { Schema } = mongoose;


const CarsSchema = new mongoose.Schema({
  Categorie: { type: [Schema.Types.ObjectId], ref: "Categorie" },
  car: { type: String, required: true },
  color: { type: String, required: true},
  model:{ type: String, required: true},
  make:{ type: String, required: true},
  registration_num:{ type: String, required: true,unique:true},
  date: { type: Date, default: Date.now },
});

const Cars=mongoose.model('Cars',CarsSchema);

module.exports=Cars;