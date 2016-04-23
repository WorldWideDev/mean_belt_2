myApp.controller('QuestionController', function ($location,UserFactory,QuestionFactory){
	self = this;
	console.log('this is the real question factory')
	self.create = function (){
		if(self.new_question.content.length < 15){
			self.err = 'Question must be at least 15 chars'
		}else{
			QuestionFactory.create(self.new_question, function (q){
				console.log('back from creating')
				console.log(q._id)
				if(!q.message){
					$location.url('/home/' + q._id)
				}else{
					console.log(q)
					self.err = q.message
				}
			})
		}
	}
})