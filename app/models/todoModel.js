var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var todoSchema = new Schema({	'task' : String,	'status' : Boolean});

module.exports = mongoose.model('todo', todoSchema);
