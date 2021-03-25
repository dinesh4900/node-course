const http = require('http');
const fs = require('fs');

// Created the server
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';

    // Basic Routing
    switch(req.url){
        case '/':
            path = path+'index.html';

            break;
        case '/about':
            path += 'about.html';
            break;
        default:
            path += '404.html'
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
server.listen(3000, 'localhost', () => {
    console.log('lfor requests on port 3000');
});

