const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: true },
  Email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phonenumber: { type: Number},
  address: { type: String },
  date: { type: Date, default: Date.now },
});

const Users=mongoose.model('Users',UserSchema);

module.exports=Users;