const userModel = require('../model/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
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

    const hashedPassword = await bcrypt.hash(password,10);

    const user = await userModel.create({
        username,
        email,
        password:hashedPassword,
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

async function loginUser(req,res){
    const {username,email,password}=req.body;

    const user = await userModel.findOne({
        $or: [
            {username},
            {email},
        ]
    })

    if(!user){
        return res.status(401).json({
            message:"Invalid Credentials"
        })
    }

    const isPasswordValid = await bcrypt.compare(password,user.password)

    if(!isPasswordValid){
        return res.status(401).json({
            message:"Invalid Credentials"
        })
    }

    const token = jwt.sign({
        id:user._id,
        role:user.role,
    },process.env.JWT_SECRET)

    res.cookie('token', token, {
    httpOnly: true,
    secure: true,      // Required for Render (HTTPS)
    sameSite: 'none',  // MANDATORY for cross-domain cookies
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
});

    res.status(200).json({
        message:"Logged In Successfully",
        user
    })
}

async function logoutUser(req,res){
    res.clearCookie("token")
    res.status(200).json({message:"User Logged out successfully"})
}


module.exports = {registerUser,loginUser,logoutUser}
