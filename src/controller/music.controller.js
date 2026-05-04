const musicModel = require("../model/music.model");
const {uplaodFile}=require("../services/storage.service");
require('dotenv').config();
const jwt = require("jsonwebtoken")

async function createMusic(req,res){
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message:"Unauthorized"
        })
    }

    try {
       const decoded = jwt.verify(token,process.env.JWT_SECRET)

       if(decoded.role !== "artist"){
        return res.status(403).json({message:"Forbidden"})
       }

    } catch (error) {
        return res.status(401).json({
            message:"Unauthorized"
        }) 
    }

    const {title}= req.body;
    const {uri} = req.file;

    const result = await uploadFile(file.buffer.toString('base64'))

    const music = await musicModel.create({
        uri: result.url,
        title,
        artist: decoded.id
    })

    res.status(201).json({
        message:"Music Created Successfully",
        music:{
            id:music._id,
            uri: music.uri,
            title:music.title,
            artist:music.artist,
        }
    })
    

}

module.exports = {createMusic}