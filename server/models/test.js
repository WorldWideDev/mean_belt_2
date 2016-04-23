var mongoose = require('mongoose');
var Schema = mongoose.Schema

var TestSchema = new Schema({
	_user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	questions: {
		type: Number
	},
	correct: {
		type: Number
	},
	percentage: {
		type: Number
	}
})

var Test = mongoose.model('Test', TestSchema)