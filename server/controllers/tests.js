var mongoose = require('mongoose');
var User = mongoose.model('User');
var Test = mongoose.model('Test');

module.exports = (function(){
	return {
		index: function(req,res){
			Test.find({}).populate('_user').exec(function (err,tests){
				if(err){
					res.json(err);
				}else{
					res.json(tests);
				}
			})
		},
		create: function(req,res){
			console.log(req.body + " new test")
			var _percent = (req.body.correct/req.body.questions)
			var new_test = new Test({
				_user: req.params.id,
				correct: req.body.correct,
				questions: req.body.questions,
				percentage: _percent
			})
			new_test.save(function (err){
				if(err){
					res.json(err)
				}else{
					res.json(new_test)
				}
			})
		}

	}
})()