const express = require('express');

// express app
const app = express();

// listent for requests
app.listen(3000);

// respond to req
// 1st argument is the path and 2nd argument is a function that takes req and response object
app.get('/', (req, res)=>{
    // no need to define status code and content type
    //res.send('<p> hello world </p>');
    // root: __dirname indicates we should give the directory where it is present besacuse it takes it as the absolute path
    res.sendFile('./views/index.html', { root: __dirname})
});

app.get('/about', (req, res)=>{
    // no need to define status code and content type
    // res.send('<p> hey hello world </p>');
    res.sendFile('./views/about.html', { root: __dirname})
});