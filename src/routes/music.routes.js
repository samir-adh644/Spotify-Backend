const express = require('express');
const musicController=require("../controller/music.controller")
const authMiddleware = require('../middlewares/auth.middleware')
const multer = require('multer')

const upload = multer({
    storage:multer.memoryStorage()
})

const router = express.Router();


router.post("/upload",authMiddleware.authArtist,upload.single("music"),musicController.createMusic)





module.exports= router;