var mongoose = require('mongoose');
var Schema = mongoose.Schema

var QuestionSchema = new Schema({
	content: {
		type: String,
		required: true
	},
	correct: {
		type: String,
		required: true
	},
	fake_1: {
		type: String,
		required: true
	},
	fake_2: {
		type: String,
		required: true
	}
})

var Question = mongoose.model('Question', QuestionSchema)