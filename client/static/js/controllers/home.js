myApp.controller('HomeController', function ($routeParams,UserFactory,QuestionFactory,TestFactory){
	self = this;
	console.log('in home controller')
	console.log($routeParams)
	TestFactory.index(function (query){
		self.tests = query
		console.log(self.tests)
	})
	self.promptName = function(){
		self.new_user = {}
		self.new_user.name = prompt('Enter A Name')
		UserFactory.create(self.new_user, function (userQuery){
			if(!userQuery.message){
				console.log('created a user')	
			}else{
				console.log(userQuery)
				self.err = userQuery.message
			}
		})
	}
	if(!$routeParams._id){
		self.promptName()
	}else{
		self.success = 'You have successfully added a question'
	}
	console.log(self.new_user)
	if(self.new_user){
		console.log('sup')
			UserFactory.create(self.new_user, function (userQuery){
				if(!userQuery.message){
					console.log('created a user')	
				}else{
					console.log(userQuery)
					self.err = userQuery.message
				}
			})

	}
	self.logout = function(){
		console.log('in logout method')
		self.promptName()
	}
})