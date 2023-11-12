import express from 'express';
import os from 'node:os';

import config from './config';
import apiRouter from './api-router';
import serverRender from './render';

const server = express();

server.use(express.static('dist'));

server.set('view engine', 'ejs');

server.use('/api', apiRouter);

let freeMem = os.freemem();

server.get(['/', '/contest/:contestId'], async (req, res) => {
    const { initialMarkUp, initialData } = await serverRender(req)
    res.render('index', {
        freeMem,
        initialMarkUp,
        initialData
    })
});

server.listen(config.PORT, config.HOST, () => {
    console.info(`Express server is listenning on http://${config.HOST}:${config.PORT}`)
});
