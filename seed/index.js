'use strict';

let models = {
    category: require('../app/DAO/categoryDAO').model,
    product: require('../app/DAO/productDAO').model
};
const Promise = require('bluebird');
const mongoose = require('mongoose-bird')(require('mongoose'));
const dbConnect = Promise.promisify(mongoose.connect, {context: mongoose});

function prepare()
{
    return models.category.removeAsync({}).then(function ()
    {
        return models.product.removeAsync({});
    });
}

// function seed()
// {
//     return models.license.createAsync(require('./data/license.json')).then(function ()
//     {
//         return models.customer.createAsync(require('./data/customer.json'));
//     }).then(function ()
//     {
//         return models.event.createAsync(require('./data/event.json'));
//     });
// }

(function run()
{
    console.info('Seeding script starts at ' + new Date());

    dbConnect('mongodb://localhost:27017/webApp').then(function ()
    {
        return prepare();

    }).catch(function (error)
    {
        console.error('error');
        console.error(error);
        process.exit(1);
    }).finally(function ()
    {
        console.info('Seeding script finished at ' + new Date());
        process.exit(0);
    });
})();
