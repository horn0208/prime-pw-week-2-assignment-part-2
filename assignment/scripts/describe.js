// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called name and set it equal to 'Dane'.
// We make a conditional statement that checks if the name exactly matches 'Mary'.
// If name is Mary, the code block will log 'Hi, Mary' to the console. Since the name is Dane, it goes on to the next block without logging anything to console yet.
// If name is not Mary (it's not), we console.log 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Declare a variable called secret without a value assigned.
// Declare a variable called code and set it equal to the number 123.
// Create a conditional statement that checks if code exactly matches 123.
// If it does match (and it does), a code block runs that assigns the string 'super' to variable secret and multiplies the value of code (123) by 2.
// Now the variable called code is set to 246.
// Create a new conditional statement that checks if the value assigned to the variable code is greater than 250.
// If the value of code is greater than 250, a code block would run that updates the value of the variable secret to the string 'duper'.
// Code's value is 246, which is less than 250, so the variable secret stays set to 'super'.
// We console.log the value of secret, which is 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Declare a variable isStudent and set it to the boolean true.
// Declare a variable age and set it to the number 34.
// Declare a variable zip and set it to the number 55407.
// Create a conditional statement that checks for two conditions: isStudent is true and zip is greater than 8000.
// If both above conditions are met, the code block will console.log 'You're a student on the West Coast!'. 
// isStudent is true, but zip is 55407 so the second condition isn't met and this block doesn't run.
// The next set of conditions checks that either isStudent is false or age is less than 30.
// since neither condition is met (isStudent is true and age is 34 which is greater than 30) the next block of code is skipped, which would console.log 'What are your hobbies?'.
// The next condition checks only if isStudent is true. In our case, it is, so we console.log 'Welcome to Prime!'.
// If none of the above conditions were met, we would log 'How about the weather?' to the console.
//

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

//FIX - colorOne should be set to 'blue'
//let colorOne = 'blue';
let colorOne = 'red';
//FIX - colorTwo should be set to 'red'.
//let colorTwo = 'red'
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  //FIX - colorTwo also needs to be set to 'purple'
  //colorTwo = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
//FIX - I'm guessing time might change at some point, and if so, we don't want this to be a constant.
//let time = 4;
const time = 4;

//FIX - current conditional is checking whether EITHER statement is true, but we want both to be true for the code to run.
// if (temp > 39 && time >= 4) { do the thing }
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

//FIX - current conditions are checking if minAge is less than or equal to age, and if so, it logs 'no entry', which keeps everyone 21 and older out of the clurb!
//if(minAge > age) { keep the rest the same }
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

