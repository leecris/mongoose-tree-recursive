/**
 * Created by Admin on 3/14/2017.
 */
var mongoose = require('mongoose');
var tree = require('mongoose-path-tree');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: { type: 'String', required: true },
    slug: { type: 'String', required: true },
    dateAdded: { type: 'Date', default: Date.now }
});

categorySchema.plugin(tree);

var Category = mongoose.model('Category', categorySchema);
module.exports = Category;
