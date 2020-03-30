// Resources : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/
// Scrabble Hand
// Published by Helen Yu in 
// gamesloopsmathobjects
// Given an array of scrabble tiles, create a function that outputs the maximum possible score a player can achieve by summing up the total number of points for all the tiles in their hand. Each hand contains 7 scrabble tiles.
// Here's an example hand:
// [
//   { tile: "N", score: 1 },
//   { tile: "K", score: 5 },
//   { tile: "Z", score: 10 },
//   { tile: "X", score: 8 },
//   { tile: "D", score: 2 },
//   { tile: "A", score: 1 },
//   { tile: "E", score: 1 }
// ]
// The players maximumScore from playing all these tiles would be 1 + 5 + 10 + 8 + 2 + 1 + 1, or 28.
function maximumScore(tileHand) {
	return tileHand.reduce((sum, currentValue) => {
  return sum + currentValue.score;
}, 0);
}

// Length of a Nested Array
// Published by Helen Yu in 
// arraysrecursion
// The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:
// [1, [2, 3]]
// // 2 elements, number 1 and array [2, 3]
// Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.
// Write a function that returns the total number of non-nested items in a nested array.
// Examples
// getLength([1, [2, 3]]) ➞ 3

// getLength([1, [2, [3, 4]]]) ➞ 4

// getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6

// getLength([1, [2], 1, [2], 1]) ➞ 5

function getLength(arr) {
	return arr.flat(Infinity).length;	
}

// Factorial of a Positive Integer
// Published by Matt in 
// conditionsloopsmathrecursion
// Write a function that takes a positive integer and return its factorial.
// Examples
// factorial(4) ➞ 24

// factorial(0) ➞ 1

// factorial(9) ➞ 362880
// Notes
// •	The factorial of 0 is 1.
// •	The factorial of any positive integer Z is Z * (Z - 1) * (Z - 2) * . . . . . . * 1 (e.g. factorial of 3 is 3 * 2 * 1 = 6).

function factorial(z) {
	if(z < 0){ return ; }
	if(z===0){ return 1;} else return z * factorial(z - 1);
}

// Basic Calculator
// Published by Stanislav Mozolevskiy in 
// algebramathnumbers
// Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.
// Examples
// calculator(2, "+", 2) ➞ 4

// calculator(2, "*", 2) ➞ 4

// calculator(4, "/", 2) ➞ 2
// Notes
// If the input tries to divide by 0, return: "Can't divide by 0!"

function calculator(num1, operator, num2) {
	if(num2 === 0){ return "Can't divide by 0!";}
	else {
		switch(operator){
				case"/":
		    		return num1 / num2;
				case"-":
return num1 - num2;
case"+":				
				return num1 - num2;
				case"*":
		   		 return num1 * num2;
		    
		}
	}
}

// Absolute Sum
// Published by gabe in 
// arraysloopsmathnumbers
// Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.
// Examples
// getAbsSum([2, -1, 4, 8, 10]) ➞ 25

// getAbsSum([-3, -4, -10, -2, -3]) ➞ 22

// getAbsSum([2, 4, 6, 8, 10]) ➞ 30

// getAbsSum([-1]) ➞ 1
// Notes
// The term "absolute value" means to remove any negative sign in front of a number, and to think of all numbers as positive (or zero).

function getAbsSum(arr) {
	const reducer = (accumulator, currentVal) => accumulator + Math.abs(currentVal);
	return arr.reduce(reducer, 0);
}

// First N Vowels
// Published by Helen Yu in 
// loopsregexstrings
// Write a function that returns the first n vowels of a string.
// Examples
// firstNVowels("sharpening skills", 3) ➞ "aei"

// firstNVowels("major league", 5) ➞ "aoeau"

// firstNVowels("hostess", 5) ➞ "invalid"
// Notes
// •	Return "invalid" if the n exceeds the number of vowels in a string.
// •	Vowels are: a, e, i, o, u
function firstNVowels(s, n) {
	const vowelExp = /[aeiou]/gi;
	const vowel = s.match( vowelExp );
	let output = "";
	if( vowel.length >= n ){
		for( var i = 0; i < n; i++ ){
			 result += vowel[i];	
	} 
	return output;
	} else {
		return "invalid";				
		}
}

// Is the Word Singular or Plural?
// Published by Helen Yu in 
// conditionsstringsvalidation
// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".
// Examples
// isPlural("changes") ➞ true

// isPlural("change") ➞ false

// isPlural("dudes") ➞ true

// isPlural("magic") ➞ false
// Notes
// •	Don't forget to return the result.
// •	Remember that return true (boolean) is not the same as return "true" (string).
// •	This is an oversimplification of the English language. We are ignoring edge cases like "goose" and "geese", "fungus" and "fungi", etc.
// •	If you get stuck on a challenge, find help in the Resources tab.
// •	If you're really stuck, unlock solutions in the Solutions tab.
// function isPlural(word) {
// 	return word.endsWith('s');	
// }

// Repeating Letters
// Published by Matt in 
// formattingstrings
// Create a function that takes a string and returns a string in which each character is repeated once.
// Examples
// doubleChar("String") ➞ "SSttrriinngg"

// doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"

// doubleChar("1234!_ ") ➞ "11223344!!__  "
// Notes
// All test cases contain valid strings. Don't worry about spaces, special characters or numbers. They're all considered valid characters.

function doubleChar(str) {
	const str1 = str.split("");
	const task = str[0];
	task += str1.reduce((accum, cValue) => accum + (cValue+cValue));
	return task;
}

// https://edabit.com/challenge/wpHyrxbSaYxLeXT6L
// Shapes With N Sides
// Published by xAlien95 in 
// arraysmath
// Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.
// Inputs	Outputs
// 1	"circle"
// 2	"semi-circle"
// 3	"triangle"
// 4	"square"
// 5	"pentagon"
// 6	"hexagon"
// 7	"heptagon"
// 8	"octagon"
// 9	"nonagon"
// 10	"decagon"
// Examples
// nSidedShape(3) ➞ "triangle"

// nSidedShape(1) ➞ "circle"

// nSidedShape(9) ➞ "nonagon"
// Notes
// •	There won't be any tests with a number below 1 or greater than 10.
// •	Return the output in lowercase.
// •	The challenge is intended to be completed without conditionals (it would take too long)!


function nSidedShape(n) {
	let shapes = ["circle", 
								"semi-circle", 
								"triangle", 
								"square", 	
								"pentagon", 
								"hexagon", 
								"heptagon",
								"octagon", 
								"nonagon",
								"decagon"]
	return shapes[n-1];
}

// https://edabit.com/challenge/7GWG3z27pKqJRdPaM
// ES6: Destructuring Objects VIII
// Published by Isaac Pak 
// formattinglanguage_fundamentalsobjects
// Using basic object destructuring you can assign variables name and email:
// let { name, email } = { name: "John", email: "john@example.com" }

// console.log(name)  // "John"
// console.log(email)  // "john@example.com"
// What if there were more properties but you didn't want to write variables for all them and just wanted to stick them into another object and do something like this:
// let { name, email, rest} = { name: "John", email: "john@example.com", city: "Phoenix", state: "AZ", country: "USA"}

// rest ===  { city: "Phoenix", state: "AZ", country: "USA"} // true
// There is something you have to do with the variable name rest in order to assign it an object containing the rest of the object properties. You can find out how in the MDN docs in the Resources tab.
// Use the rest syntax to change the code so that rest = {city: "Phoenix", state: "AZ", address: "USA"}. Only edit the left side of the assignmet { name, email, rest }. Ignore the .toString() function (used for validation).
// Notes
// If you know how to use object destructuring, go ahead and complete this challenge, otherwise check the Resources tab for some examples.

const user = { name: "John", email: "john@example.com",city: "Phoenix", state: "AZ", country: "USA"}
const str = `({ name, email, ...rest} = user ).toString()`

// Get the Century
// Published by Helen Yu in 
// control_flownumbersstrings
// Create a function that takes in a year and returns the correct century.
// Examples
// century(1756) ➞ "18th century"

// century(1555) ➞ "16th century"

// century(1000) ➞ "10th century"

// century(1001) ➞ "11th century"

// century(2005) ➞ "21st century"
// Notes
// •	All years will be between 1000 and 2010.
// •	The 11th century is between 1001 and 1100.
// •	The 18th century is between 1701-1800.
function century(year) {
	if(year.toString().substring(2)=="00"){
		return year.toString().substring(0,2)+"th century";
	} else {
		if(year.toString().substring(0,2)=="20"){
			return (Number(year.toString().substring(0,2))+1).toString()+"st century";
		} 
		return (Number(year.toString().substring(0,2))+1).toString()+"th century";
	}
}

// https://edabit.com/challenge/T2sDPQQhpaEd9YAiq
// RegEx: Character Classes VIII ⁠- \D
// Published by Isaac Pak in 
// formattinglanguage_fundamentalsregex
// You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.
// Here are a list of the characters classes in JavaScript:
// ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
// There is a hidden message in this string:
// const str = "242Edabit23 45can344 3be3 254324addictive!"
// Write the regular expression that reveals the hidden message. You have to remove all of the numbers to reveal the message. Use the character class \D in your expression.
// Notes
// Check the Resources tab for details on character classes if you're stuck.

const REGEXP = /\D/g;

// https://edabit.com/challenge/rkoYERWYDt32qZLvH
// Count the Syllables
// Published by Matt in 
// language_fundamentalsstrings
// Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).
// Examples
// countSyllables("Hehehehehehe") ➞ 6

// countSyllables("bobobobobobobobo") ➞ 8

// countSyllables("NANANA") ➞ 3
// Notes
// Your code should accept strings of any case (upper, lower and mixed case).

function countSyllables(str) {
	const output = [];
	for(var i in str){
		if(str.includes(output)){
			 output.push(str[i]);
		} 		
	}
	return str.length/output.length;	
}

// https://edabit.com/challenge/STfAEAE5fjNmFCsvf
// ES6: Destructuring Arrays III
// arrayslanguage_fundamentals
// You can assign variables from arrays with destructuring like this:
// const arr = ["eyes", "nose", "lips", "ears"]
// let [eyes, nose, lips, ears] = arr
// But you can also skip over items in the array being destructured.
// Notes
// Check the Resources tab for more examples.

// DO NOT change arr
// DO NOT USE var [lips] = arr[2]
// "eyes", "nose", and "ears" should not be assigned to anything

const arr = ["eyes", "nose", "lips", "ears"];
var [,,lips,] = arr;

// https://edabit.com/challenge/xPAPYC24EEpwzwQDy
// Char-to-ASCII
// Published by Helen Yu in 
// JavaScript
// algorithmsnumbersstrings
// Create a function that returns the ASCII value of the passed in character.
// Examples
// ctoa("A") ➞ 65

// ctoa("m") ➞ 109

// ctoa("[") ➞ 91

// ctoa("\") ➞ 92
// Notes
// •	Don't forget to return the result.
// •	If you get stuck on a challenge, find help in the Resources tab.
// •	If you're really stuck, unlock solutions in the Solutions tab.
function ctoa(c) {
	return c.charCodeAt(0);
}

// https://edabit.com/challenge/pzmTaGsP6FWRNBF9y
// Multiply Every Array Item by Two
// Published by felixjoykind in 
// JavaScript
// LANGUAGES
// JavaScript
// Python
// Ruby
// Translate
// arrayslanguage_fundamentals
// Create a function that takes an array with numbers and return an array with the elements multiplied by two.
// Examples
// getMultipliedArr([2, 5, 3]) ➞ [4, 10, 6]

// getMultipliedArr([1, 86, -5]) ➞ [2, 172, -10]

// getMultipliedArr([5, 382, 0]) ➞ [10, 764, 0]
// Notes
// N/A

function getMultipliedArr(arr) {
	return (arr.map(x => x*2));
}

// https://edabit.com/challenge/qkNvH9BZLTNtKQvae
// Slice of Pie
// Published by Helen Yu in 
// algebramathvalidation
// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
// 1.	Total number of slices.
// 2.	Number of recipients.
// 3.	How many slices each person gets.
// The function will be in this form:
// equalSlices(total slices, no. recipients, slices each)
// Examples
// equalSlices(11, 5, 2) ➞ true
// // 5 people x 2 slices each = 10 slices < 11 slices

// equalSlices(11, 5, 3) ➞ false
// // 5 people x 3 slices each = 15 slices > 11 slices

// equalSlices(8, 3, 2) ➞ true

// equalSlices(8, 3, 3) ➞ false

// equalSlices(24, 12, 2) ➞ true
// Notes
// •	Return (trivially) true if there are zero people.
// •	It's fine not to use the entire pie.
// •	All test parameters are integers.
// •	Don't forget to return the result.
// •	If you get stuck on a challenge, find help in the Resources tab.
// •	If you're really stuck, unlock solutions in the Solutions tab.
function equalSlices(total, people, each) {
	return total >= (people * each);	
}

// https://edabit.com/challenge/hztqDz4mjCPpLMMF4
// Return the Total Number of Parameters
// Published by Helen Yu in 
// language_fundamentals
// Create a function that returns the total number of parameters passed in.
// Examples
// numberArgs("a", "b", "c") ➞ 3

// numberArgs(10, 20, 30, 40, 50) ➞ 5

// numberArgs(x, y) ➞ 2

// numberArgs() ➞ 0
// Notes
// •	How can you express the input parameter so it takes a variable number of arguments?
// •	Check the Resources tab for additional info.
function numberArgs(...argsN) {
	return argsN.length;		
}

// https://edabit.com/challenge/grqSjHHQYHBeKK6E3
// Two Regular Expression Methods
// Published by Isaac Pak in 
// regex
// There are three methods (exclude compile) that you can use with regular expression literals. Use these two methods to fix the code. One method returns a boolean if there is a match. The other method returns an iterator from a search.
// Notes
// •	Do not use the same method twice.
// •	Do not use String methods that accept regular expresssions as arguments.
function twoMethods() {
	// find and equals are not regular expression methods.  Replace them. 
	let methodOne = /hello/.exec("hello")[0] === "hello" 
	let methodTwo = /hello/.test("hello") // returns a boolean
	return methodOne && methodTwo
}

// https://edabit.com/challenge/9MBwBaa3wDKX8Mxbv
// Case Insensitive Comparison
// Published by Helen Yu in 
// JavaScript
// language_fundamentalsstringsvalidation
// Write a function that validates whether two strings are identical. Make it case insensitive.
// Examples
// match("hello", "hELLo") ➞ true

// match("motive", "emotive") ➞ false

// match("venom", "VENOM") ➞ true

// match("mask", "mAskinG") ➞ false
// Notes
// N/A

function match(s1, s2) {
	return s1.toLowerCase() === s2.toLowerCase();
}
