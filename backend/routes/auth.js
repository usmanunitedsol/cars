const express =require('express');
const Users=require('../models/Users');
const router=express.Router();
const { validationResult , body } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

const secretKey = 'usman_secret_key';

//Create a User using:POST "/api/auth/createuser"

router.post('/createuser',[
    body('name').isLength({min:3}).withMessage('Enter a valid name'),
    body('Email').isEmail().withMessage('Not a valid e-mail address'),
    body('password').isLength({min:5}).withMessage('password must be atleast 5 characters'),
],async (req,res)=>{
  let success = false;
  //if there is errors send bad request
   const result = validationResult(req);
  if (!result.isEmpty()) {
    return  res.status(400).json({ errors: result.array() });
  }

  //check the user is already exists

  try { 
        let user=await Users.findOne({Email:req.body.Email});
      if(user)
      {
        success = false
        return res.status(400).json({success,error:"Already user exists"})
      }
      const salt =  bcrypt.genSaltSync(10);
      const secpassword= await bcrypt.hash( req.body.password, salt);
      //create a user
      user=await Users.create({
        name:req.body.name,
        password:secpassword,
        Email:req.body.Email,
      });
      const data={
        user:{
          id:user.id,
          } 
        }
      const authData= jwt.sign(data, secretKey, { expiresIn: '1h' });
      success = true;
      console.log(authData);
      res.json({success,authData})
    
  } catch (error) {
    console.error(error.message);
    res.status(500).json({error:"Some error occured"})
  }
 
})


//login a User using:POST "/api/auth/login"

router.post('/login',[
  body('Email').isEmail().withMessage('Not a valid e-mail address'),
  body('password').exists().withMessage('password must not be empty'),
],async (req,res)=>{
  //if there is errors send bad request
  let success = false;
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return  res.status(400).json({ errors: result.array() });
  }

 
  try {
    const {Email,password}=req.body;
    let user=await Users.findOne({Email});
    if(!user)
    {
      success = false
      return res.status(400).json({success,error:"incorrect information"})
      
    }

     comparepassword=await bcrypt.compare(password,user.password);
       
     if(!comparepassword){
      success = false
      return res.status(400).json({success, error:"incorrect information"})
     }
    const data={ user:{id:user.id,} }
    const authData= jwt.sign(data, secretKey, { expiresIn: '1h' });
    console.log(authData);
    success = true;
    res.json({success,authData})
  } catch (error) {
    console.error(error.message);
    res.status(500).json({success, error:"Some error occured"})
  }
})


//login a User using:POST "/api/auth/getuser"
//login required

router.post('/getuser',fetchuser, async (req,res)=>{
  try {
      const  userId=req.user.id;
      const user=await Users.findById(userId).select("-password")
      res.json({user});
  } catch (error) {
    console.error(error.message);
    res.status(500).json({error:"Some error occured"})
  }
})



module.exports=router