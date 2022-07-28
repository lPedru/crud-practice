const http = require('http');

const app = require('./app');

const PORT = 3000;

const server = http.createServer(app);

function startServer() {
    server.listen(PORT, () => {
        console.log(`${new Date(Date.now())} | Server is Running on Port ${PORT}`);
    })
}

startServer();