'use strict';

//Modules
var express = require('express');
var messageController = require('../controllers/message');

//Router initialitation
var api = express.Router();

//Middlewares
var auth_middleware = require('../middlewares/authenticated');

//Routes
api.get('/delete-message', auth_middleware.ensureAuth, messageController.deleteMessage);
api.get('/test-message-controller', auth_middleware.ensureAuth, messageController.testing);
api.post('/message', auth_middleware.ensureAuth, messageController.saveMessage);
api.get('/get-received-messages/:page?', auth_middleware.ensureAuth, messageController.getReceivedMessages);
api.get('/get-emit-messages/:page?', auth_middleware.ensureAuth, messageController.getEmitMessages);
api.get('/unviewed-messages', auth_middleware.ensureAuth, messageController.getUnviewedMessages);
api.get('/set-viewed-messages', auth_middleware.ensureAuth, messageController.setViewedMessages);

//Export
module.exports = api;
