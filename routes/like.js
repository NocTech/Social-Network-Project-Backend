'use strict';

var express = require('express');

//Like Controller Functions
var LikeController = require('../controllers/like');

//Express Router
var api = express.Router();

//Middlewares
var auth_middleware = require('../middlewares/authenticated');

//Routes
api.post('/like', auth_middleware.ensureAuth, LikeController.saveLike);
api.get('/like/:id', auth_middleware.ensureAuth, LikeController.checkLike);
api.delete('/delete-like/:id', auth_middleware.ensureAuth, LikeController.deleteLike);
api.get('/get-likes/:publication', auth_middleware.ensureAuth, LikeController.getLikes);


module.exports = api;