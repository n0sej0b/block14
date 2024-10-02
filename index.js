// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split("3,4");

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}

// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the length of the array
 */
function getLength(numbers) {
  return numbers.length;
}

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the sum of the numbers
 */
function getSum(numbers) {
  let sum = 0
 for(let i = 0; i < numbers.length; i++){
  sum += numbers[i];

 }
 return sum;  
 
 }

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the mean of the numbers
 */
const numbers = [getMean];
let sum = 0;
numbers.forEach((number) => {
  sum += number;
})
let avg = sum / numbers.length;

/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the smallest of the numbers
 */
const numbers = [2,5,6,8]
const minValue = Math.min(...numbers);


/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the largest of the numbers
 */
const numbers = [2,5,6,8]
const maxValue = Math.max(...numbers);


/**
 * @param {number[]} numbers an array of integers
 * @returns {number} the range of the numbers (max - min)
 */
const range = (start, end) => Array(end - start + 1).fill().map((_, idx) => start + idx);
console.log(range(1, 10));

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the even numbers in the array
 */
const evens = numbers.filter(num => num % 2 === 0);

/**
 * @param {number[]} numbers an array of integers
 * @returns {number[]} the odd numbers in the array
 */
const odds = numbers.filter(num => num % 1 === 0);
