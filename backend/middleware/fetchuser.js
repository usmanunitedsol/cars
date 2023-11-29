const jwt = require('jsonwebtoken');
const secretKey = 'usman_secret_key';

const fetchuser =(req,res,next)=>{
    //get the user from jwt user and add id to request object
    const token=req.header('auth-token');
    if(!token)
    {
        res.status(401).send({error:"invalid token"})
    }

    try {
        const data=jwt.verify(token,secretKey);
        req.user=data.user;
    } catch (error) {
        res.status(401).send({error:"invalid token"})
    }
    next();
}

module.exports=fetchuser;