const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end(`
            <h1>Welcome to our home page</h1>
            <p> Would you like to know more? </p>
            <a href="/about"> Yes! </a>
            `);
    } else if (req.url === '/about') {
        res.end(`
        <h1>Long time ago in a Galaxy far far away...</h1>
        <p1><a href="/">Back Home</a></p1>
        <p2><a href="/error">Droids</a></p2>
        `);
    } else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the droids you are looking for</p>
        <a href="/">Back Home</a>
        `);
    }
});

server.listen(5000);