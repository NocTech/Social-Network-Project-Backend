'use strict'

var express = require('express');
var UserController = require('../controllers/user');

//This method allows the access to the methods GET, POST, PUT, DELETE
var api = express.Router();

//MIDDLEWARE Authentication
var auth_middleware = require('../middlewares/authenticated');

//MIDDLEWARE Multiparty
var multiparty = require('connect-multiparty');
var md_upload = multiparty({ uploadDir: './uploads/users' });

//First Parameter: Route
//Second Parameter: Middleware
//Third Parameter: Controller Function
api.get('/test-user-controller', auth_middleware.ensureAuth, UserController.testing);
api.post('/register', UserController.saveUser);
api.post('/login', UserController.loginUser);
api.get('/user/:id', auth_middleware.ensureAuth, UserController.getUser);
api.get('/users/:page?', auth_middleware.ensureAuth, UserController.getUsers);
api.put('/update-user/:id', auth_middleware.ensureAuth, UserController.updateUser);
api.post('/upload-image-user/:id', [auth_middleware.ensureAuth, md_upload], UserController.uploadImage);
api.get('/get-image-user/:imageFile', UserController.getImageFile);
api.get('/counters/:id?', auth_middleware.ensureAuth, UserController.getCounters);

api.post('/forgot-password', UserController.forgotPassword);
api.post('/reset-password', UserController.resetPassword);

module.exports = api;