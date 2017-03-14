/**
 * Created by Admin on 3/14/2017.
 */
var mongoose = require('mongoose');
var async = require('async');
var slug = require('slug');
var config = require('./config');
var Category = require('./model');
// Set native promises as mongoose promise
mongoose.Promise = global.Promise;

// MongoDB Connection
mongoose.connect(config.mongoURL, function(error) {
    if (error) {
        console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
        throw error;
    }
});

var data = require('./data');
generateData(data);

function generateData(data) {
    Category.remove({},function(){
        console.log('All documents removed');
    }).then(function(){
        // Define structure of categories
        var cat_tree = data;
        async.mapSeries(cat_tree,
            function(item,callback){
                var parent = new Category({
                    name: item.name,
                    slug: slug(item.name),
                });
                parent.save().then(function(itemSaved){
                    console.log("Save cat "+itemSaved.name+" done!!!");
                    if (typeof item.sub !== 'undefined') {
                        console.log('Continue with sub cat of parent cat ',itemSaved.name);
                        loopItem(item.sub, itemSaved);
                    }
                    callback(null)
                })
            },function(err){
                if (err) {
                    console.log(err);
                } else {
                    console.log('All done');
                }
            })
    });
};

function loopItem(items, parentObj) {
    async.mapSeries(items, function(item, callback){
        console.log("Creating new sub cat "+ item.name);
        var obj = new Category({
            name: item.name,
            slug: slug(item.name)
        });
        obj.parent = parentObj;
        obj.save().then(function(itemSaved){
            console.log("Save sub cat "+ itemSaved.name + " successfully");
            if (typeof item.sub !== 'undefined') {
                loopItem(item.sub, itemSaved);
            }
            callback(null);
        })
    }, function(err){
        if (err) {
            console.log(err);
        } else {
            console.log('All sub cat created successfully');
        }
    });
}