'use strict';

import ProductDAO from '../DAO/productDAO';

function create(context) {
    async function createNewOrUpdate(data) {
        let result = await ProductDAO.createNewOrUpdate(data);
        if (result) {
            return result;
        }
    }

    async function query() {
        let result = await ProductDAO.query();
        if (result) {
            return result;
        }
    }

    async function get(id) {
        let result = await ProductDAO.get(id);
        if (result) {
            return result;
        }
    }

    return {
        createNewOrUpdate: createNewOrUpdate,
        query: query,
        get: get,
    };
}

export default {
    create: create
};
