
const albumModel = require("../model/album.model");
const jwt = require("jsonwebtoken");

async function createAlbum(req,res){
    const token = req.cookies.token;

    
        const {title , musics} = req.body;


        
        const album = await albumModel.create({
            title,
            artist:req.user.id,
            musics:musics,
        })

        res.status(201).json({message:"Album Created Successfully",
            album:{
                id:album._id,
                title:album.title,
                artist:album.artist,
                musics:album.musics,
            }
        })




  
}

module.exports = {createAlbum}