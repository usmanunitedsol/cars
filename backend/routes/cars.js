const express =require('express');
const router=express.Router();
const { validationResult , body } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
const Cars = require('../models/Cars');
const Category = require('../models/Categories');
const getCategory = require('../middleware/getCategory');

//Route :1: Get all the cars using get "/api/cars/getCars". login required
router.get('/fetchcars', async (req, res) => {
  try {
    const userId = req.query.userId;
    const cars = await Cars.find({ user: userId });
    console.log('Fetching cars for user:', userId);
    console.log('Found cars:', cars);
    res.json({ cars });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Some error occurred" });
  }
});


  //Route :1: Get all the categories using get "/api/cars/get". login required
router.get('/fetchcategories',fetchuser, async (req,res)=>{
  try {
      const  userId=req.user.id;
      const categories=await Category.find({user:userId})
      console.log('Fetching categories for user:', userId);
      console.log('Found cars:', categories);
      res.json({categories});
  } catch (error) {
    console.error(error.message);
    res.status(500).json({error:"Some error occured"})
  }
})

//Route :2: add the categories using post "/api/cars/addCategory". login required
router.post('/addCategory',[
  body('title').exists().withMessage('add the category name'),
],fetchuser, async (req,res)=>{

  const result = validationResult(req);
  if (!result.isEmpty()) {
    return  res.status(400).json({ errors: result.array() });
  }
  try {
      const  user=req.user.id;
      const {title}=req.body;
      const isregistered=await Category.findOne({title:title});
      console.log(title)
      console.log(isregistered)
      if(isregistered)
      {
         return res.status(400).json({error:"Category is already registered with same name"})
      }
      const newCategory=new Category({
        title,user,
      })

      const savenewCategory=await newCategory.save();
      console.log('savenewCategory:', savenewCategory);
      res.json({savenewCategory:savenewCategory});
       
  } catch (error) {
    console.error(error.message);
    res.status(500).json({error:"Some error occured"})
  }
})



  //Route :2: add the cars using get "/api/cars/addCars". login required
router.post('/addcar',[
    body('car').exists().withMessage('add the car name'),
    body('color').exists().withMessage('add the car name'),
    body('Category').exists().withMessage('add the car category'),
    body('model').exists().withMessage('add the car model'),
    body('make').exists().withMessage('add the car make'),
    body('registration_num').exists().withMessage('add the color  registration number'),
 ],fetchuser, async (req,res)=>{

    const result = validationResult(req);
    if (!result.isEmpty()) {
      return  res.status(400).json({ errors: result.array() });
    }
    try {
        const  user=req.user.id;
        // const category=req.title.id;
        const {Category,car,color,model,make,registration_num}=req.body;
        const isregistered=await Cars.findOne({ registration_num: registration_num });
        console.log(isregistered)
        if(isregistered)
        {
           return res.status(400).json({error:"Car is already registered with same number"})
        }
        const newCar=new Cars({
          Category,car,color,model,make,registration_num , user
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