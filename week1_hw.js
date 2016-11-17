/* 1.
write a function to determine if a word is a palindrome
isPalindrome('kayak') //true
isPalindrome('cook') //false
*/
function isPalindrome(word) {
	word = word.toLowerCase().replace(/\s+/g, '')
	var arr = []
	var result = true
	for(var i = 1; i <= word.length; i++){
		arr[i - 1] = word[word.length - i]
	}
	
	for (var i = 1; i <= word.length; i++){
		if(word[i] != arr[i]){
			result = false
			break
		}
	}
	return result
}

console.log(isPalindrome('cook'))
console.log(isPalindrome('KaYAk'))
console.log(isPalindrome('A but tuba'))

/* 2.
Write a function that takes a string and replace repeated characters
replaceLetters('parallel') //para**el
replaceLetters('muhaaa') //muh***
*/
function replaceLetters(word) {
	var arr = word.match(/([a-zA-Z])\1*/g)
	var astricks = ''
	
	for (var i = 0; i < arr.length; i++) {
		astricks = ''
		if (arr[i].length > 1) {
			for(var j = 0; j < arr[i].length; j++) {
				astricks += '*'
			}
			arr[i] = astricks
		}
	}
	return arr.join('')
}

console.log(replaceLetters('parallel'))
console.log(replaceLetters('muhaaa'))

/* 3.
Write a function that finds the letter which occurs the most

repeatingLetters(['z', 'y', 'x', 'x', 'w', 'z', 'y', 'u', 'y', 'y']); 
value: y, occurances: 4  
OR
{ z: 2, y: 4, x: 2, w: 1, u: 1 }
*/

function repeatingLetters(char_li) {
	var char_dic = {}
	var indexes = []
	var char_count = 0
	var char 
	
	while(char_li.length > 0) {
	char = char_li[0].toLowerCase()

	//find the char indexes in the list
	for(var j = 0; j < char_li.length; j++) {
		if(char_li[j].toLowerCase() == char) {
			indexes.push(j)
		}
	}

	char_count = indexes.length

	//remove the char from the list
	while(indexes.length > 0) {
		char_li.splice(indexes.pop(), 1)
	}

	char_dic[char] = char_count
	}
	return char_dic
}

console.log(repeatingLetters(['z', 'y', 'x', 'x', 'w', 'z', 'y', 'u', 'y', 'y']))
console.log(repeatingLetters(['a', 'a', 'b', 'b', 'B', 'A', 'c', 'C', 'd', 'D']))

/* 4.
Write a function that shuffles an array. The results should be random. HINT: Use Math Object - Math.floor(), Math.Random()
shuffleArray([1, 2, 3, 4, 5]); // [3, 5, 1, 2, 4]
*/
function shuffleArray(num_li) {
	var ran_li =[]
	var shuffle_arr_li = []

	while(ran_li.length != num_li.length){

		ran_num = (Math.floor(Math.random() * (num_li.length - 0)) + 0)

		if(ran_li.indexOf(ran_num) == -1) {
			ran_li.push(ran_num)
		}
	}

	for(var i = 0; i < num_li.length; i++) {
		shuffle_arr_li.push(num_li[ran_li[i]])
	}
	return shuffle_arr_li
}
console.log(shuffleArray([1, 2, 3, 4, 5]))

/*5.
Write a function that takes two numbers and a math operator (+, -, *, /) and performs the calculation.

calculate(2, 8, '-'); // 2 - 8 = -6
calculate(2, 8, '+'); // 2 + 8 = 10
calculate(2, 8, '*'); // 2 * 8 = 16
calculate(2, 8, '/'); // 2 / 8 = 0.25
*/

function calculate(num1, num2, opt) {
	switch(opt) {
		case '-':
			return num1 - num2;
			break;
		case '+':
			return num1 + num2;
			break;		
		case '*':
			return num1 * num2;
			break;
		case '/':
			return num1 / num2;
			break;
		default:
			console.log('Invalid Operator')			
	}
}

console.log(calculate(2, 0, '+'))

/*Write a function that sums all the numbers (string value numbers too) in an array with mixed types

sumArray([1, 2, 'a', 4, '7', 'b', 'c', 7]); // 21
*/
function sumArray(ran_li) {
	var sum = 0

	//loop to iterate through the list
	for(var i = 0; i < ran_li.length; i++) {
		if(!isNaN(ran_li[i])) {
			sum += parseFloat(ran_li[i])
		}
	}
	return sum
}
console.log(sumArray([1, 2, 'a', 4, '7', 'b', 'c', 7, '20']))

/*7.
Write a function that takes a grocery array and tax amount as a percent. 
This function should calculate the total paid by applying the tax to each grocery item. 
HINT: use .toFixed() to force decimals to 2 places.

var groceries = [
  { name: 'Orange Juice', price: 2.00 },
  { name: 'Milk', price: 3.50 },
  { name: 'Cereal', price: 2.00 },
  { name: 'Sugar', price: 1.75 }
];
totalPaid(groceries, 9.5);

//
{ total: '10.13',
  groceries:
   [ { name: 'Orange Juice', paid: '2.19' },
     { name: 'Milk', paid: '3.83' },
     { name: 'Cereal', paid: '2.19' },
     { name: 'Sugar', paid: '1.92' } ] }
*/
function totalPaid(groceries, per) {
	var total = 0
	var final_bill = {}

	for(var i = 0; i < groceries.length; i ++) {
		total_price = groceries[i].price + (groceries[i].price * (per/100))
		total += total_price
		groceries[i].price = total_price.toFixed(2)
	}
	total = total.toFixed(2)

	final_bill['total'] = total
	final_bill['groceries'] = groceries
	return final_bill
}

var groceries = [
  { name: 'Orange Juice', price: 2.00 },
  { name: 'Milk', price: 3.50 },
  { name: 'Cereal', price: 2.00 },
  { name: 'Sugar', price: 1.75 }
]
console.log(totalPaid(groceries, 9.5))


function shuffle (array) {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
 	return array
}

console.log(shuffle([1, 2, 3, 4, 5, 6]))



























