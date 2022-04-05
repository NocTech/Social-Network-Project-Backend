'use strict';

var express = require('express');
var PublicationController = require('../controllers/publication');
var api = express.Router();
var auth = require('../middlewares/authenticated');

var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: './uploads/publications' });

api.get('/test-publication-controller', auth.ensureAuth, PublicationController.testing);
api.put('/publication', auth.ensureAuth, PublicationController.savePublication);
api.get('/publications/:page?', auth.ensureAuth, PublicationController.getPublications);
api.get('/publications-user/:user/:page?', auth.ensureAuth, PublicationController.getPublicationsUser);
api.get('/publication/:id', auth.ensureAuth, PublicationController.getPublication);
api.delete('/delete-publication/:id', auth.ensureAuth, PublicationController.deletePublication);
api.post('/upload-image-publication/:id', [auth.ensureAuth, md_upload], PublicationController.uploadImage);
api.get('/get-image-publication/:imageFile', PublicationController.getImageFile);

module.exports = api;

