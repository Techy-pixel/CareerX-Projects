/*Exercise 1: Even or Odd Checker

Instruction:
Ask the user to enter a number
Use % to check if the number is even or odd
Show the result with alert()
*/
// Ask the user to enter a number
let number = prompt("Enter a number:");

// Convert the input to a number
number = Number(number);

// Check if the number is even or odd
if (number % 2 === 0) {
  alert("The number is even.");
} else {
  alert("The number is odd.");
}


let numbers = prompt("Enter a number:");

numbers = Number(numbers);

if (isNaN(number)) {
  alert("That is not a valid number.");
} else if (number % 2 === 0) {
  alert("The number is even.");
} else {
  alert("The number is odd.");
}

/*
Instruction:

Ask for user's age

If age is 18 or above, show “Eligible”

Else, show “Not eligible”
*/

// Ask for user's age
let age = prompt("Enter your age:");

// Convert the input to a number
age = Number(age);

// Check eligibility
if (age >= 18) {
  alert("Eligible");
} else {
  alert("Not eligible");
}


/*
Exercise 4: Print Numbers from 1 to 10
Instruction:
Use a for loop to print numbers from 1 to 10
Use console.log() (not alert)
*/

// Use a for loop to print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

  
/*  Exercise 5: Multiplication Table Generator
Instruction:

Ask the user to enter a number

Use a for loop to print the multiplication table from 1 to 12

Use console.log() (not alert)
*/

// Ask the user to enter a number
let numbers1 = prompt("Enter a number for the multiplication table:");

// Convert the input to a number
numbers1 = Number(numbers1);

// Print the multiplication table from 1 to 12
for (let i = 1; i <= 12; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

/*
Exercise 6: Grade Checker

Instruction:

Ask user to enter a score (0–100)

Use if...else to show:

70–100: "Excellent"

50–69: "Good"

Below 50: "Needs Improvement"
*/

// Ask user to enter a score (0–100)
let score = prompt("Enter your score (0–100):");

// Convert the input to a number
score = Number(score);

// Check and display the grade category
if (score >= 70 && score <= 100) {
  alert("Excellent");
} else if (score >= 50 && score <= 69) {
  alert("Good");
} else if (score >= 0 && score < 50) {
  alert("Needs Improvement");
} else {
  alert("Invalid score. Please enter a number between 0 and 100.");
}

/*
Exercise 7: Guess the Number Game

Instruction:

Generate a random number between 1 and 5

Ask the user to guess

Tell them if they got it right or wrong using alert()
*/

// Generate a random number between 1 and 5
let randomNumber = Math.floor(Math.random() * 5) + 1;

// Ask the user to guess
let userGuess = prompt("Guess a number between 1 and 5:");

// Convert the input to a number
userGuess = Number(userGuess);

// Check if the guess is correct
if (userGuess === randomNumber) {
  alert("🎉 Correct! You guessed the number.");
} else {
  alert(`❌ Wrong! The correct number was ${randomNumber}.`);
}
