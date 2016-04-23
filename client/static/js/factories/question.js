myApp.factory('QuestionFactory', function ($http){
	var factory = {}
	factory.index = function(callback){
		console.log('in question factory index')
		$http.get('/questions/index').success(function (ring){
			callback(ring);
		})
	}
	factory.create = function(newQuestion, callback){
		console.log(newQuestion)
		$http.post('/questions/create', newQuestion).success(function (meow){
			callback(meow)
		})
	}
	return factory
})