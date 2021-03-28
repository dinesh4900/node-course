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

// redirect
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

// 404 -- it should be at the bottom of the code because if it is in first it acts as default
 app.use((req, res) => {
     // express doesnt recognise it is a 404 error so we should give status code to the line
    res.status(404).sendFile('./views/404.html', { root: __dirname});
});