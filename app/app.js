'use strict';

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import config from './config';
import routes from './REST/routes';

const app = express();
app.use(express.static(__dirname + '/'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit: '2048kb'}));

app.use(cors());

app.use(express.static('public'));


routes(app);
app.listen(config.port, () => {
    console.info(`Server is running at ${config.port}`)
});