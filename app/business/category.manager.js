'use strict';

import categoryDAO from '../DAO/categoryDAO';

function create(context) {
    async function query() {
        let result = await categoryDAO.query();
        if (result) {
            return result;
        }
    }

    return {
        query: query
    };
}

export default {
    create: create
};
