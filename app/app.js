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

app.use(express.static('frontend/app'));

mongoose.connect(config.databaseUrl, {useNewUrlParser: true, useCreateIndex: true}, (error) => {
    if (error) {
        console.error(error);
    }
    else {
        console.log('Connect with database established');
    }
});
process.on('SIGINT', () => {
    mongoose.connection.close(function () {
        console.error('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});

routes(app);
app.listen(config.port, () => {
    console.info(`Server is running at ${config.port}`)
});