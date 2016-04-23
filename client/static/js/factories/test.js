myApp.factory('TestFactory', function ($http){
	var factory = {}
	factory.index = function(callback){
		console.log('in test factory index')
		$http.get('/tests/index').success(function (ring){
			callback(ring);
		})
	}
	factory.create = function(newTest, userId, callback){
		console.log(newTest)
		console.log('in test factory create')
		$http.post('/tests/create/' + userId, newTest).success(function (meow){
			callback(meow)
		})
	}
	return factory
})