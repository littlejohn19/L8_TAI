'use strict';

import categoryEndpoint from './category.endpoint';
import productEndpoint from './product.endpoint';

const routes = (router, config) => {
    categoryEndpoint(router);
    productEndpoint(router);
};

export default routes;
