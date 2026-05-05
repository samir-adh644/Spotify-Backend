const express = require('express');

const albumController = require('../controller/album.controller')
const authMiddleware = require('../middlewares/auth.middleware')

const router = express.Router();

router.post("/album",authMiddleware.authArtist,albumController.createAlbum);

module.exports= router;