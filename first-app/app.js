
// const Logger = require('./logger');
// const logger = new Logger();

// // Register a listener
// logger.on('messageLogged', (arg) => {
//     console.log('listener called', arg)
// });

// logger.log('message');

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.on('connection', (socker) => {
    console.log('New connection...');
});

server.listen(3000);

console.log('Listening on port 3000...');