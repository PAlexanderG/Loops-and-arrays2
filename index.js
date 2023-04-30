/**
 * SOLUTION FOR PROBLEM #1 - ONLY ODDS
 *
 * Pseudocode:
 * 1 - create a variable that holds the resulting array.
 * 2 - loop over the array and find the odd numbers
 * 3 - console log my results at the end
 */

// Inputs values
//* 1 - create a variable that holds the resulting array.
// use 'let' because we don't want to assign a new value to the array variable
let inputValues = [2, 4, 6, 8, 11, 20, 15, 22];
inputValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
inputValues = [70, 42, 55, 81, 21, 91, 34];
inputValues = [2, 4, 6, 8, 10, 11, 12];

const result = [];
// For loops:look through a block of code a number of times
// A for loop statement is created with 3 expresions:();{}
// for (initialization; condition; afterthought){
// statemet
// }
for (let i = 0; i < inputValues.length; i++) {
  const inputValue = inputValues[i];
  if (inputValue % 2 !== 0) {
    result.push(inputValue);
  }
}

console.log(result);

/**
 * SOLUTION FOR PROBLEM #2 - VOWELS vs CONSONANT
 *
 * Pseudocode:
 * 1 - define two variables that keep track of the number of consonants and vowels.
 * 2 - loop over each letter and check if consonant or vowel
 * 3 - increase consonant or vowel count
 * 4 - console.log result.
 */

let inputValue2 = "hello";
inputValue2 = "ukelele";

let countConsonant = 0;
let countVowels = 0;

for (let i = 0; i < inputValue2.length; i++) {
  const letter = inputValue2[i];

  if (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u"
  ) {
    countVowels = countVowels + 1;
  } else {
    countConsonant = countConsonant + 1;
  }
}

console.log(
  inputValue2 +
    " has " +
    countConsonant +
    " consonants and " +
    countVowels +
    " vowels"
);

/**
 * SOLUTION FOR PROBLEM #3 - REVERSE ARRAY
 *
 * Pseudocode:
 * 1 - define one variables that keeps list of reversed values.
 * 2 - loop in reverse order over each number int the input array
 * 3 - push each number into the reversedArray as it is looping
 * 4 - console log the resulting reversedArray
 */

let inputArray = [1, 2, 3];
inputArray = [1, 3, 5, 7, 9, 11];
inputArray = [20, 50, 30, 60, 200];
inputArray = [1, -1, 2, -3, 5, -8, 13];

const reversedArray = [];
for (let i = inputArray.length - 1; i >= 0; i--) {
  const num = inputArray[i];
  reversedArray.push(num);
}

console.log(reversedArray);

/**
 * SOLUTION FOR PROBLEM #4 - FIZZBUZZ
 *
 * Pseudocode:
 * 1 - define one variables that keeps the limiting number.
 * 2 - loop from 1 all the way up to the limit number.
 * 3 - depending if the number is divisible by 3, 5 and/or both, print Fizz or Buzz
 * 4 - console.log the number with Fuzz, Buzz or FuzzBuzz
 */

let limitNumber = 100;

for (let i = 1; i <= limitNumber; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
