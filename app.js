const express = require('express');

// express app
const app = express();

// register view engines
app.set('view engine', 'ejs');
// app.set('views', 'myviews')  //setting view path

// listent for requests
app.listen(3000);
console.log("listening");

app.use((req, res) =>{
    console.log('new request made');
    console.log('host : ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
})


// respond to req
// 1st argument is the path and 2nd argument is a function that takes req and response object
app.get('/', (req, res)=>{

    const blogs = [
        {title: 'Dinesh', snippet: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'},
        {title: 'Dinesh', snippet: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'},
        {title: 'Dinesh', snippet: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'},
    ];
    // no need to define status code and content type
    //res.send('<p> hello world </p>');
    // root: __dirname indicates we should give the directory where it is present besacuse it takes it as the absolute path
    // res.sendFile('./views/index.html', { root: __dirname});

    res.render('index', {title: 'Home', blogs});
});

app.get('/about', (req, res)=>{
    // no need to define status code and content type
    // res.send('<p> hey hello world </p>');
    // res.sendFile('./views/about.html', { root: __dirname});

    res.render('about', {title: 'About'});
});

app.get('/blogs/create', (req, res) =>{
    res.render('create', {title: 'Create'});
})

// redirect
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
//     console.log("hello world");
// })

// 404 -- it should be at the bottom of the code because if it is in first it acts as default
 app.use((req, res) => {
     // express doesnt recognise it is a 404 error so we should give status code to the line
     // res.status(404).sendFile('./views/404.html', { root: __dirname});

     res.status(404).render('404', {title: '404'});
});