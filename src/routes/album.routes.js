const express = require('express');

const albumController = require('../controller/album.controller')

const router = express.Router();

router.post("/album",albumController.createAlbum);

module.exports= router;