const mongoose = require("mongoose");

const Cars = require("./Cars.js");
const { Schema } = mongoose;


const CategorieSchema = new Schema({

  title: { type: String, required: true,unique:true},
  user: {  type: [Schema.Types.ObjectId],ref:"Users" },
  date: { type: Date, default: Date.now },
});

const Categorie=mongoose.model('Categorie',CategorieSchema);

module.exports=Categorie;