myApp.controller('PlayController', function ($location,UserFactory,QuestionFactory,TestFactory){
	self = this;
	UserFactory.login(function (query){
		self.curr_user = query;
		console.log(self.curr_user)
		//console.log(self.curr_user)
	})
	QuestionFactory.index(function (query){
		self.questions = []
		console.log(query)
		var random = Math.floor((Math.random() * (query.length - 3)))
		console.log(random)
		for (var i = 0; i < 3; i++) {
			self.questions.push(query[random++])
		};
		// console.log(self.questions.length)
	})
	self.create = function(){
		console.log(self.new_test)
		console.log(self.new_test.correct)
		for (var i = 0; i < self.new_test; i++) {
			console.log(i)
			console.log('sup')
		};
		var correct = []
		for(key in self.new_test.correct){
			correct.push(key)
		}
		var newTest = {correct: correct.length, questions: self.questions.length}
		console.log(correct.length)
		correct.num = correct.length
		console.log(newTest)
		TestFactory.create(newTest, self.curr_user._id, function (t){
			$location.url('/home/' + t._id)
		})
	}
	
})