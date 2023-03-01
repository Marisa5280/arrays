var fastFood = ["Mc Donald's", "Chick-fil-a", "Taco Bell", "Wendy's"];

var ages = [12, 23, 34, 42, 17];

var quizAnswers = [true, false, false, true, false];

fastFood.pop();
console.log(fastFood);
// Pop removes the last element in an array, in this example, "Wendy's" will be removed.
ages.push(56);
console.log(ages);
// Push adds an element to the last index position in an array, in this example the age 56 will be added to the 5th index position
quizAnswers.unshift(true);
console.log(quizAnswers);
// Unshift adds an element to the beginning of an array in the 0 index postions and shifts all other positions to the right. This example now has the new boolean var as postion 0 and the array ends in position 5 instead of 4.

// The index position in an array helps assign placement to the variables in an array in order to make clear changes and edits to the array, and keep the positions of the variables intentional.