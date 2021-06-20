const input = require('readline-sync');

//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.
let astroNum = 0;

while (astroNum > 6 || astroNum < 0) {
  mealCount = input.question("How many meals should I prepare?")
}
let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grain = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let vegetable = ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let beverage = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let dessert = ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];

// let pantry = [['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'],
// ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'],
// ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'],
// ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'],
// ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi']]


//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.
// let astroMeal = [];

// for (let i = 0; i < 6; i++){
//   let meal = [protein[i], grain[i], vegetable[i], beverage[i], dessert[i]];
    
// }



//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6.


// let output = input.question("How many meals should I prepare?"); 

// while (i < astroNum){
//   let output = `Meals: ${pantry[0][i]}, ${pantry[1][i]}, ${pantry[2][i]}, ${[3][i]}, ${[4][i]}`
// }
// console.log(output);
// i++;


//Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.
// b. Use an “array of arrays” to store the food options in a ‘pantry’.
// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.”