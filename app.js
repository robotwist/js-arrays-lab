/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = []; 

console.log('Exercise 1 result:', foods);

/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/

foods.push("pizza","cheeseburger");  

console.log('Exercise 2 result:', foods);

foods.unshift("taco");

console.log('Exercise 3 result:', foods);

const pizzaIdx = foods.indexOf('pizza');

const favFood = foods[pizzaIdx];

console.log('Exercise 4 result:', favFood);

foods.splice(pizzaIdx +1, 0, 'tofu');

console.log('Exercise 5 result:', foods);


foods.splice(pizzaIdx, 1, 'sushi', 'cupcake');
    
console.log('Exercise 6 result:', foods);


const sushiIdx = foods.indexOf('sushi');
const cupcakeIdx = foods.indexOf('cupcake');
const yummy = foods.slice(sushiIdx, cupcakeIdx +1);

console.log('Exercise 7 result:', yummy);


const soyIdx = foods.indexOf('tofu');


console.log('Exercise 8 result:', soyIdx);



const allFoods = foods.join(' -> ');


console.log('Exercise 9 result:', allFoods);

/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/

const hasSoup = foods.includes('soup');


console.log('Exercise 10 result:', hasSoup);

// 11.

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

const odds = [];

for (let i = 0; i < nums.length; i++) {
    if (nums[i]%2===1) {
        odds.push(nums[i]);
    }
}
  

  

console.log('Exercise 11 result:', odds);

/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/

const fizz = [];
const buzz = [];
const fizzbuzz = [];

for (let i = 0; i < nums.length; i++) {
    
    if  ((nums[i]%5===0) && (nums[i]%3===0)){
        fizzbuzz.push(nums[i]);    
    }
    if (nums[i]%3===0) {
        fizz.push(nums[i]);
    }
    if (nums[i]%5===0) {
        buzz.push(nums[i]);
    }
}

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

/*
Exercise 13: Retrieve the Last Array

1) Assign the last nested array in the `numArrays` below to a variable named
   `numList`. As you do this, also fulfill these goals:

   - Assume you don't know how many nested arrays `numArrays` contains.
   - Do not alter the original `numArrays` array.

Complete Exercise 13 in the space below:
*/

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

const numList = numArrays[numArrays.length-1]

console.log('Exercise 13 result:', numList);

/*
Exercise 14: Accessing within nested arrays

Retrieve number `66` from the `numArrays` array. As part of process
   do not alter the original `numArrays` array.

2) Assign it to a variable called `num`.

Complete Exercise 14 in the space below:
*/

//const num = numArrays[2][1]; //direct, hardcoded, less flexible

//const num = numArrays[numArrays.length-2] dynamic solution adaptable

//num.splice(0, 1)

//console.log('Exercise 14 result:', num);

const num = numArrays[numArrays.length - 2];
const modifiedNum = [];

// Iterate, skip first element
for (let i = 1; i < num.length; i++) {
  modifiedNum.push(num[i]);
}

console.log('Exercise 14 result:', modifiedNum);

/*
Exercise 15: Nested array sum

1) Use nested loops or `forEach()` methods to sum up all numbers within 
   `numArrays` nested arrays.
   
2) Assign the sum to a variable called `total`.

Hint: Be sure to declare and initialize the total variable before the iterations.

Complete Exercise 15 in the space below:
*/
total = 0
numArrays.forEach(array => {
    array.forEach(num => {
        total += num;
    });
});

console.log('Exercise 15 result:\n', total);

