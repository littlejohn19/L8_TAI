'use strict';

import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

import mongoConverter from '../service/mongoConverter';
import applicationException from '../service/applicationException';

const productSchema = new mongoose.Schema({
    name: {type: String},
    description: {type: String},
    price: {type: Number},
    image: {type: String},
    category: {type: String},
    amount: {type: Number},
}, {
    collection: 'product'
});
productSchema.plugin(uniqueValidator);

const ProductModel = mongoose.model('product', productSchema);

function query() {
    return ProductModel.find({}).then(function (result) {
        if (result) {
            return mongoConverter(result);
        }
    });
}

function get(id) {
    return ProductModel.findOne({_id: id}).then(function (result) {
        if (result) {
            return mongoConverter(result);
        }
    });
}

function createNewOrUpdate(data) {
    return Promise.resolve().then(() => {
        if (!data.id) {
            return new ProductModel(data).save().then(result => {
                if (result[0]) {
                    return mongoConverter(result[0]);
                }
            });
        } else {
            return ProductModel.findByIdAndUpdate(data.id, _.omit(data, 'id'), {new: true});
        }
    }).catch(error => {
        if ('ValidationError' === error.name) {
            error = error.errors[Object.keys(error.errors)[0]];
            throw applicationException.new(applicationException.BAD_REQUEST, error.message);
        }
        throw error;
    });
}


export default {
    query: query,
    get: get,
    createNewOrUpdate: createNewOrUpdate,

    model: ProductModel
};
