'use strict';

import business from '../business/business.container';
import applicationException from '../service/applicationException';

const productEndpoint = (router) => {
    router.get('/api/products', async (request, response, next) => {
        try {
            let result = await business(request).getProductManager().query();
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.get('/api/product/:id', async (request, response, next) => {
        try {
            let result = await business(request).getProductManager().get(request.params.id);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.post('/api/product/', async (request, response, next) => {
        try {
            let result = await business(request).getProductManager().createNew(request.body);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.post('/api/product/', async (request, response, next) => {
        try {
            let result = await business(request).getProductManager().createNew(request.body);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });
};

export default productEndpoint;
