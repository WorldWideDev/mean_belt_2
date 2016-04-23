var mongoose = require('mongoose');
var User = mongoose.model('User');

var users = require('../controllers/users.js')
var questions = require('../controllers/questions.js')
var tests = require('../controllers/tests.js')

module.exports = function(app){
	app.get('/users/index', function (req,res){
		console.log('in user index routes')
		users.index(req,res);
	})
	app.get('/users/login', function (req,res){
		users.login(req,res)
	})
	app.post('/users/create', function (req,res){
		users.create(req,res)
	})
	app.get('/questions/index', function (req,res){
		questions.index(req,res)
	})
	app.post('/questions/create', function (req,res){
		console.log('in create question route')
		questions.create(req,res)
	})
	app.post('/tests/create/:id', function (req,res){
		console.log('in tests create')
		tests.create(req,res)
	})
	app.get('/tests/index', function (req,res){
		console.log('in tests index')
		tests.index(req,res)
	})
}