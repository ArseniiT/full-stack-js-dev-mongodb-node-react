import express from 'express';
import os from 'node:os';

import config from './config';

const server = express();

server.use(express.static('dist'));

server.set('view engine', 'ejs');

let freeMem = os.freemem();

server.use((req, res) => {
    res.render('index', {
        freeMem
    })
});

server.listen(config.PORT, config.HOST, () => {
    console.info(`Express server is listenning on http://${config.HOST}:${config.PORT}`)
});
