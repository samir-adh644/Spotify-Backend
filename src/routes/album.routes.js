const express = require('express');

const albumController = require('../controller/album.controller')
const authMiddleware = require('../middlewares/auth.middleware')

const router = express.Router();

router.post("/create",authMiddleware.authArtist,albumController.createAlbum);
router.get("/albums",authMiddleware.authUser,albumController.getAllAlbums);
router.get("/albums/:albumId",authMiddleware.authUser,albumController.getAlbumById)


module.exports= router;