/*1.
Write a function named flattenArray that uses the reduce method in combination 
with the concat method to "flatten" an array of arrays into a single array that has all
the elements of the input arrays. This function should apply to all arrays. (Hint: use
Array.prototype to define your function)

var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.flattenArray)
// -> [1, 2, 3, 4, 5, 6] 
*/
Array.prototype.flattenArray = function() {
	return this.reduce(function(a, b) {
		return a.concat(b)
	})
}
var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.flattenArray())

var arrays2 = [['a', 'b', 'c'], ['d', 'e'], ['f']]
console.log(arrays2.flattenArray())
