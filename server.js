//console.log(http.STATUS_CODES);
//console.log(http.METHODS);

const http = require('http'),
    fs = require('fs'),
    path = require('path'),
    {simpleRouting} = require('./utils/routs')

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.write(simpleRouting(req.url))
    res.end()
})

//Debug?
server.on('request', (req, res) => {
    console.log(req.url);
    console.log(req.method);
    if (req.method === 'POST') console.log('POST method: ' + req.url)
})

//Start server
server.listen(3000, 'localhost')
console.log(`Server listening on localhost:3000...`)
