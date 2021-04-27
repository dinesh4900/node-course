const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blogs');
const { result } = require('lodash');
const { render } = require('ejs');

// express app
const app = express();


const dbURI = 'mongodb+srv://king4900:iloveyou4900@nodejs.wqi5k.mongodb.net/node-king?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))

// register view engines
app.set('view engine', 'ejs');
// app.set('views', 'myviews')

//setting view path

// listent for requests
// app.listen(3000);
// console.log("listening");
// middleware and static files

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// app.use((req, res, next) =>{
//     console.log('new request made');
//     console.log('host : ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// });

// app.use((req, res, next) =>{
//     console.log('In the next middleware');

//     next();
// })


// mongoose and sandbox routes
// app.get('/add-blog',(req, res) => {
//     const blog = new Blog({
//         title: 'new blog 3',
//         snippet: 'about new blog',
//         body: 'more features'
//     });

//     blog.save()
//     .then((result)=> {
//         res.send(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// });

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//     .then((result)=> {
//         res.send(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// })

// app.get('/single-blog', (req, res)=>{
//     Blog.findById('6080064692ddba28e7266967')
//     .then((result)=> {
//         res.send(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// })

// respond to req
// 1st argument is the path and 2nd argument is a function that takes req and response object
app.get('/', (req, res)=>{

//     const blogs = [
//         {title: 'Dinesh', snippet: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'},
//         {title: 'Dinesh', snippet: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'},
//         {title: 'Dinesh', snippet: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'},
//     ];
//     // no need to define status code and content type
//     //res.send('<p> hello world </p>');
//     // root: __dirname indicates we should give the directory where it is present besacuse it takes it as the absolute path
//     // res.sendFile('./views/index.html', { root: __dirname});
//     res.render('index', {title: 'Home', blogs});

    res.redirect('/blogs');
 });

app.get('/about', (req, res)=>{
    // no need to define status code and content type
    // res.send('<p> hey hello world </p>');
    // res.sendFile('./views/about.html', { root: __dirname});

    res.render('about', {title: 'About'});
});

app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1})
    .then((result) => {
        res.render('index', {title: 'all blogs', blogs: result})
    })
    .catch((err) => {
        console.log(err);
    })
});

app.post('/blogs', (req, res) => {
    const blog =  new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err);
        })
});

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('details', {blog: result, title: 'blog destails'})
        })
        .catch((err) => {
            console.log(err);
        })
})

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