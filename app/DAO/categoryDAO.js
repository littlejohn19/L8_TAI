'use strict';

import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

import mongoConverter from '../service/mongoConverter';

const categorySchema = new mongoose.Schema({
    name: {type: String}
}, {
    collection: 'category'
});
categorySchema.plugin(uniqueValidator);

const CategoryModel = mongoose.model('category', categorySchema);

async function query() {
    const result = await CategoryModel.find({});
    {
        if (result) {
            return mongoConverter(result);
        }
    }
}

export default {
    query: query,

    model: CategoryModel
};
