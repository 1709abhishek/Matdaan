const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const db = require('./config/mongoose');







//running the express server
app.listen(port, function(err){
    if(err){
        console.log('Error in running the server: ',err);
    }
     console.log(`server is running on port: ${port}`);
});