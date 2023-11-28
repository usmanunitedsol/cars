const express =require('express');
const Users=require('../models/Users');
const router=express.Router();
const { validationResult , body } = require('express-validator');


//Create a User using:POST "/api/auth/"

router.post('/',[
    body('name').isLength({min:3}).withMessage('Enter a valid name'),
    body('Email').isEmail().withMessage('Not a valid e-mail address'),
    body('password').isLength({min:5}).withMessage('password must be atleast 5 characters'),
],(req,res)=>{
   console.log(req.body);
   const result = validationResult(req);
  if (!result.isEmpty()) {
    res.send({ errors: result.array() });
  }
  Users.create({
    name:req.body.name,
    password:req.body.password,
    Email:req.body.Email,
  }).then(user=>res.json(user))
  .catch(err=>{console.log(err)
  res.json({error:'Please enter unique email',message:err.message})})
})

module.exports=router