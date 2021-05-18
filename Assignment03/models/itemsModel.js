let mongooose = require('mongoose');

let Scheme = mongooose.Schema;

let itemsSchema = new Scheme( {
    name : String,
});

module.exports = mongooose.model('items', itemsSchema);