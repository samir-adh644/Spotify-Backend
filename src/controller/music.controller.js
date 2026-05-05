const musicModel = require("../model/music.model");
const {uploadFile}=require("../services/storage.service");
require('dotenv').config();
const jwt = require("jsonwebtoken")

async function createMusic(req,res){
    const token = req.cookies.token;

 


   
    const {title}= req.body;
    const {uri} = req.file;

    const result = await uploadFile(req.file.buffer.toString('base64'))

    const music = await musicModel.create({
        uri: result.url,
        title,
        artist: req.user.id,
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

async function getAllMusics(req,res){
    const musics = await musicModel.find().populate("artist","username email")

    res.status(200).json({
        message:"Music fetched successfully",
        musics: musics,
    })
}




module.exports = {createMusic,getAllMusics}