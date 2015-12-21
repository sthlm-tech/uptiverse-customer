'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var CustomerSchema = new mongoose.Schema({
	customerNumber: {type: Number, required: true, unique: true},
	name: {type: String, required: true},
	email: {type: String, unique: true},
	phone: {type: String},
	internalRoles: [String]
});

export default mongoose.model('Customer', CustomerSchema);
