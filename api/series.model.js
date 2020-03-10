const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define collection for series
let Series = new Schema({
    title: {
        type: String
    },
    genre: {
        type: String
    },
    source: {
        type: String
    },
    author: String
},{
    collection: 'Series'
});

module.exports = mongoose.model('Series', Series, 'Series');