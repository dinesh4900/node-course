const http = require('http');
const fs = require('fs');
const _ = require('lodash');

// Created the server
const server = http.createServer((req, res) => {
  
    // lodash
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log('hello');
    });
  
    greet();
    greet();
  
    // set header content type
    res.setHeader('Content-Type', 'text/html');
  
    let path = './views/';
  
    // Basic Routing 
    switch(req.url){
        case '/':
            path = path+'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            // it is used for redirecting 301 code is for redirect where range of 300 is used for redirecting
            // 1st argument is Location and second is the page which we are reusing to redirect
            res.statusCode = 301;
            res.setHeader('Location', './about');
            res.end();
            break;
        default:
            path += '404.html'
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) =>{
        if(err){
            console.log(err);
            res.end();
        }else{
            //res.write(data);  // if we area sending only one data as response we can ignore this line
            
            res.end(data);
        }
    })

});

// listening to the server 

server.listen(3002, 'localhost', () => {
    console.log('listening for requests on port 3000');
});