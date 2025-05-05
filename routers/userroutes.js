const express = require("express");
const User = require("../models/usermodel")
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const validatetoken = require("../middleware/validatetoken");
const router = express.Router()


router.post("/register",  asyncHandler(async(req,res)=>{
    const {username,email,password}=req.body;
    console.log(username,email,password)
    if(!username || !email || !password){
        res.status(400)
        throw new Error("all field ar e mandotory ")
    }
    const findone= await User.findOne({email})
    if(findone){
        res.status(400);
        throw new Error("you are already register")
    }
    const hashpassword= await bcrypt.hash(password,10)
    const createuser=await User.create({username, email, password:hashpassword

    })

    console.log(findone)
    res.status(200)
    res.json({text:createuser})
}))
router.post("/login", asyncHandler(async (req, res) => {
    const {email,password}=req.body;
    console.log(email,password);
    const finduser=await User.findOne({email})
    if(finduser  && await  bcrypt.compare(password,finduser.password)){
       const token =   jwt.sign({user:{
            username:finduser.username,
            email,
            id:finduser._id
        }},"abres",{expiresIn: "50m"})
    res.status(200)
    res.json({token})
    }
    else{
        res.status(400)
        res.json({text:"you are not registered or your input are invalid"})
    }
    
}));
router.get("/current", validatetoken, async(req,res)=>{
    res.json({text:"suss",info:req.user})
})


module.exports = router