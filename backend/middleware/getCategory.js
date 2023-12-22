
const getCategory =async(req,res,next)=>{


    try {
        
        const {title}=req.body;
        const iscategory=await Categorie.findOne({title:title});
        req.title=iscategory.title;
    } catch (error) {
        res.status(401).send({error:"invalid category"})
    }
    next();
}

module.exports=getCategory;