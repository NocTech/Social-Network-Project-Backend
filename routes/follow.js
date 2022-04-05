'use strict';

var express = require('express');

//Follow Controller Functions
var FollowController = require('../controllers/follow');

//Express Router
var api = express.Router();


//Middlewares
var auth_middleware = require('../middlewares/authenticated');


//Routes
api.post('/follow', auth_middleware.ensureAuth, FollowController.saveFollow);
api.delete('/unfollow/:id', auth_middleware.ensureAuth, FollowController.deleteFollow);
api.get('/following/:id?/:page?', auth_middleware.ensureAuth, FollowController.getFollowingUsers);
api.get('/followed/:id?/:page?', auth_middleware.ensureAuth, FollowController.getFollowedUsers);
api.get('/get-follows/:followed?', auth_middleware.ensureAuth, FollowController.getFollows);


module.exports = api;