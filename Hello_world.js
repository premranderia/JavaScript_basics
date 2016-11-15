//variable declarations
var greeting = 'Hello World'
var aplha, beta, gamma
var aplha = 5, beta = 'hello', gamma = 'world'

console.log(greeting)
console.log(aplha, beta, gamma)

//Define functions
function addThree(n) {
	return n + 3
}

var addTwo = function(n) {
	return n + 2
}

console.log(addThree(2))
console.log(addTwo(10))

var robot = {
	name: 'Optimus Prime',
	team: 'Autobot',
	colors: ['red', 'blue', 'white']
}

//adding properties
robot.homeWorld = 'Cybertron'

//Accessing properties through for loop
for (var key in robot) {
	console.log(key, robot[key])
}

