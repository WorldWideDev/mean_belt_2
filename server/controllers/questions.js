var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = (function(){
	return {
		index: function(req,res){
			Question.find({}, function (err,questions){
				if(err){
					res.json(err);
				}else{
					console.log(questions)
					res.json(questions);
				}
			})
			console.log('in user index controller')
		},
		create: function(req,res){
			var new_question = new Question({
				content: req.body.content,
				correct: req.body.correct,
				fake_1: req.body.fake_1,
				fake_2: req.body.fake_2,
			})
			new_question.save(function (err){
				if(err){
					res.json(err)
				}else{
					console.log('created a question')
					res.json(new_question)
				}
			})
		}
	}
})()