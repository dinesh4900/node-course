const http = require('http');

// Created the server
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    res.write('<head><link rel="stylesheet" href="#"></head>')
    res.write('<h1>hello ninja</h1>');
    res.write('<p>hello dinesh ninja</p>');
    res.end();
});

// listening to the server
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});

