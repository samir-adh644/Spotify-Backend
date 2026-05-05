
const albumModel = require("../model/album.model");
const jwt = require("jsonwebtoken");

async function createAlbum(req,res){
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({message:"Unauthorized"})
    }

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        
        if (decoded.role !== "artist"){
            return res.status(403).json({message:"You dont have access to create album"})
        }

        const {title , musics} = req.body;


        
        const album = await albumModel.create({
            title,
            artist:decoded.id,
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




    } catch (error) {
        console.log(error);
        return res.status(401).json({message:"Unauthorized2"})
        
    }
}

module.exports = {createAlbum}