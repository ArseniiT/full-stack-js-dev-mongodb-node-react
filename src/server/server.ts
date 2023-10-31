import express from 'express';

const server = express()

server.listen('8000', '0.0.0.0', () => {
    console.info('Express server is listenning on http://0.0.0.0:8080')
})
