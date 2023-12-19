const express =require('express');
const router=express.Router();
const { validationResult , body } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
const Cars = require('../models/Cars');

//Route :1: Get all the cars using get "/api/cars/getCars". login required
router.get('/fetchcars',fetchuser, async (req,res)=>{
    try {
        const  userId=req.user.id;
        // const cars=await Cars.find({user:userId})
        const cars=await Cars.find({user:userId});
        console.log(cars)
        res.json({cars});
    } catch (error) {
      console.error(error.message);
      res.status(500).json({error:"Some error occured"})
    }
  })

  //Route :2: add the cars using get "/api/cars/addCars". login required
router.post('/addcar',[
    body('category').exists().withMessage('add the car category'),
    body('car').exists().withMessage('add the car name'),
    body('color').exists().withMessage('add the car name'),
    body('model').exists().withMessage('add the car model'),
    body('make').exists().withMessage('add the car make'),
    body('registration_num').exists().withMessage('add the color  registration number'),
 ],fetchuser, async (req,res)=>{

    const result = validationResult(req);
    if (!result.isEmpty()) {
      return  res.status(400).json({ errors: result.array() });
    }
    try {
        const  userId=req.user.id;
        const {category,car,color,model,make,registration_num}=req.body;
        const isregistered=await Cars.findOne({ registration_num: registration_num });
        console.log(isregistered)
        if(isregistered)
        {
           return res.status(400).json({error:"Car is already registered with same number"})
        }
        const newCar=new Cars({
            category,car,color,model,make,registration_num,userId
        })

        const savecar=await newCar.save();
        console.log('Saved Car:', savecar);
        res.json({cars:savecar});
         
    } catch (error) {
      console.error(error.message);
      res.status(500).json({error:"Some error occured"})
    }
  })

  module.exports=router