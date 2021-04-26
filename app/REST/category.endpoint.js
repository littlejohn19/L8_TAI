'use strict';

import business from '../business/business.container';
import applicationException from '../service/applicationException';

const categoryEndpoint = (router) => {
    router.get('/api/category', async (request, response, next) => {
        try {
            let result = await business(request).getCategoryManager().query();
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });
};

export default categoryEndpoint;