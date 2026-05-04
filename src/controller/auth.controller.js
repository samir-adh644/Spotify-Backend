const userModel = require('../model/user.model');
const jwt = require('jsonwebtoken');
require('dotenv').config();

async function registerUser(req,res){
    const {username,email,password,role="user"}=req.body;

    const isUser = await userModel.findOne({
        $or: [
            {username},
            {email}
        ]
    })

    if (isUser){
        return res.status(409).json({message:"User already exists!"})
    }

    const user = await userModel.create({
        username,
        email,
        password,
        role
    })

    const token = jwt.sign({
        id:user._id,
        role:user.role,
    },process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(201).json({
        message:"User Registered Successfully.",
        user:{
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
        }
    })


}

