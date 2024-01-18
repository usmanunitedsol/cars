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
router.get('/fetchcategories', async (req,res)=>{
  try {
    const userId = req.query.userId;
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
], async (req,res)=>{

  const result = validationResult(req);
  if (!result.isEmpty()) {
    return  res.status(400).json({ errors: result.array() });
  }
  try {
       const user = req.query.userId;
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
    body('category').exists().withMessage('add the car category'),
    body('model').exists().withMessage('add the car model'),
    body('make').exists().withMessage('add the car make'),
    body('registration_num').exists().withMessage('add the color  registration number'),
 ], async (req,res)=>{

    const result = validationResult(req);
    if (!result.isEmpty()) {
      return  res.status(400).json({ errors: result.array() });
    }
    try {
         const user = req.query.userId;
        // const category=req.title.id;
        const {category,car,color,model,make,registration_num}=req.body;
        const isregistered=await Cars.findOne({ registration_num: registration_num });
        console.log(isregistered)
        if(isregistered)
        {
           return res.status(400).json({error:"Car is already registered with same number"})
        }
        else{
        const newCar=new Cars({
          category,car,color,model,make,registration_num ,user
        })

        const savecar=await newCar.save();
        console.log('Saved Car:', savecar);
        res.json({cars:savecar});
      }
         
    } catch (error) {
      console.error(error.message);
      res.status(500).json({error:"Some error occured"})
    }
  })

    //delete a category info using:delete "/api/auth/deltecategory"
//login required

router.delete('/deletecar/:id',async(req,res)=>{
  try {
      const catId = req.params.id;
      console.log('catId ', catId)
      const deletedcar=await Cars.deleteOne( {'registration_num' : catId})
      console.log("Deleted car",deletedcar);
       return  res.json({deletedcar}); 
    

  } catch (error) {
    console.error(error.message);
     res.status(500).json({error:"Some error occured"})
  }
})


  //update a car info using:PUT "/api/auth/getuser"
//login required

router.put('/updatecar/:id',async(req,res)=>{
  try {
    const catId = req.params.id;
    console.log("param id", catId)
    const {category,car,color,model,make,registration_num}=req.body
    console.log("cat test", req.body)
    const newcar={};

    // Check if the new registration_num is already registered
    const existingCar = await Cars.findOne({ registration_num: registration_num });
    if (existingCar && existingCar._id != catId) {
      // If the registration_num is already registered for another car
      return res.status(400).json({ error: "Registration number is already registered for another car" });
    }
 
    if(category){newcar.category=category}
    if(car){newcar.car=car}
    if(color){newcar.color=color}
    if(model){newcar.model=model}
    if(make){newcar.make=make}
    if(registration_num){newcar.registration_num=registration_num}

    


      const updatedcar=await  Cars.findByIdAndUpdate(catId,newcar,{ new: true })

         console.error(updatedcar);
       return  res.json({updatedcar}); 
    

  } catch (error) {
    console.error(error.message);
     res.status(500).json({error:"Some error occured"})
  }
})

  //update a User info using:PUT "/api/auth/getuser"
//login required

router.put('/updatecategory/:id',async(req,res)=>{
  try {
    const catId = req.params.id;
    console.log("param id", catId)
    const {title}=req.body
    console.log("cat test", req.body)
    const upadtedcategory={};
 
    if(title){upadtedcategory.title=title}


      const category=await Category.findByIdAndUpdate(catId,upadtedcategory,{ new: true })

         console.error(category);
       return  res.json({category}); 
    

  } catch (error) {
    console.error(error.message);
     res.status(500).json({error:"Some error occured"})
  }
})



  //delete a category info using:delete "/api/auth/deltecategory"
//login required

router.delete('/deletecategory/:id',async(req,res)=>{
  try {
    const catId = req.params.id;



      const category=await Category.findByIdAndDelete(catId)

       console.log("Deleted category",category);
       return  res.json({category}); 
    

  } catch (error) {
    console.error(error.message);
     res.status(500).json({error:"Some error occured"})
  }
})




  module.exports=router