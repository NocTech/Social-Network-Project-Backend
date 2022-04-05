'use strict';
var app = require('./app');
var port = 3800;

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://jonas:testtest@cluster0.slqjw.mongodb.net/social', {
    useNewUrlParser: true,
}).then(() => {
    console.log("Database connected successfully");

    app.listen(port, () => {
        console.log("Server running at http://localhost:3800");
    });
}).catch(err => console.log(err));
