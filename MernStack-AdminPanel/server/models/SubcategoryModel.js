const mongoose = require('mongoose');

const subcategorySchma = mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },

    registerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'registers'
    },

    subcategory: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'active'
    }
});

const subcategory = mongoose.model('subcategory', subcategorySchma)
module.exports = subcategory;