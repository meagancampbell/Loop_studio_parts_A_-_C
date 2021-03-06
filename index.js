const input = require('readline-sync');
let output = input.question("How many meals should I prepare?"); 

//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.
let astroNum;

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grain = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let vegetable = ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let beverage = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let dessert = ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];


//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.
const pantry = [protein, grain, vegetable, beverage, dessert];
let preparedMealsArray =[];

for (i = 0; i < 6; i++){
  console.log(`Astronaut ${i+1} gets a meal of ${protein[i]}, ${grain[i]}, ${vegetable[i]}, ${beverage[i]}, and ${dessert[i]}.`)
}
console.table(pantry);

//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6.
const mealCount = input.question("How many meals should I assemble?");

let num = mealCount;
while (num < 1 || num > 6 || isNaN(num)){
  
  num = input.question('Invalid input. Please enter a number from 1 to 6: ');
}

//Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.
// b. Use an “array of arrays” to store the food options in a ‘pantry’.
// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.”

let j=0

while (j < num){
  if (vegetable[j] === 'kale' || dessert[j] === 'more kale'){
    console.log(`${protein[j]}, ${grain[j]}, ${vegetable[j]}, ${beverage[j]}, and ${dessert[j]}. Don't worry, you can have double chocolate tomorrow.`);
  } else {
    console.log(`${protein[j]}, ${grain[j]}, ${vegetable[j]}, ${beverage[j]}, and ${dessert[j]}.`);
  }
  j++;
}