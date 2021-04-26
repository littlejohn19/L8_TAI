'use strict';

import categoryManager from './category.manager';
import productManager from './product.manager';

function getContext(request) {
  return { user: request && request.user };
}

function getter(manager, request) {
  return function () {
    return manager.create(getContext(request), this);
  };
}

const createBusinessContainer = (request, config) => {

  return {
    getCategoryManager: getter(categoryManager, request),
    getProductManager: getter(productManager, request)
  };
};

export default createBusinessContainer;