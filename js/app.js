// JavaScript weekend REPS!
// Class: wdi-cc
// Type: Homework
// Duration: A few hours
// Created by: GA WDI Instructional staff
// Competencies: Data types, loops, arrays, functions, scope, objects
//
// Setup
// Fork/clone/etc -- you know what to do!
//
// For every question, MAKE SURE THAT YOUR CODE RUNS WITHOUT ERRORS IN THE CONSOLE. Keep resaving reloading your browser after every bit of code you write, and fix all errors as soon as you spot them/before moving on.
//
// I. Variables & Datatypes
// A. Q + A
// How do we assign a value to a variable?
//  let var = value;
// How do we change the value of a variable?
//  var = newValue; or var++ or var += 7;
// How do we assign an existing variable to a new variable?
//  var2 = var1;
// Remind me, what are declare, assign, and define?
//  declare is where we use a word like const or let to start a variable;
//  assign is where we give a variable a value using the equals sign;
//  define is where we both declare a variable and assign it a value;
// What is pseudocoding and why should you do it?
//  pseudocoding is writing out in comments or normal English the steps of what you want to accomplish.
// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
//  You should spend at least 50% of your time thinking through solving the problem? The coding shouldn't take that long. The debugging might take a long time.
// 🔴 Commit.
//
// B. Strings
// Create a variable called firstVariable.
let firstVariable;
// Assign it the value of the string "Hello World"
firstVariable = "Hello World";
// Change the value of this variable to some number.
firstVariable = 7;
// Store the value of firstVariable in a new variable called secondVariable
let secondVariable = firstVariable;
// Change the value of secondVariable to any string.
secondVariable = "any string";
// What is the value of firstVariable?
console.log(firstVariable);
// Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
const yourName = "Bill";
const greeting = "Hello, my name is " + yourName;
console.log(greeting);
// ex: Hello, my name is Jean Valjean
//
// 🔴 Commit.
//
// C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console.
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';
//
  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false || false || false || false || false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');
// 🔴 Commit.
//
// D. The farm
// Declare a variable animal. Set it to be either "cow" or something else.
const animal = "cow";
// Write code that will print out "mooooo" if the it is equal to cow.
if (animal === "cow") {
  console.log("mooooo")
// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
} else { console.log("Hey! You're not a cow.") }
// Commit.
// 🔴 Commit.
//
// E. Driver's Ed
// Make a variable that holds a person's age. Be semantic.
 const age = 25;
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
if (age >= 16){
  console.log("Here are the keys!");
} else { console.log("Sorry, you're too young.")}
// 🔴 Commit.
//
// II. Loops
// Remember: USE let when you initialize your for loops!
//
// This is GOOD: for(let i = 0; i < 100; i++)
//
// This is NO GOOD: for(i = 0; i < 100; i++)
//
// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive.
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
// Write a loop that will print out all the numbers from 10 up to and including 400.
// for (let i = 10; i <= 400; i++) {
//   console.log(i);
// }
// Write a loop that will print out every third number starting with 11 and going no higher than 4000.
// for (let i = 11; i <= 4000; i += 3) {
//   console.log(i);
// }
// 🔴 Commit.
//
// B. Get even
// Print out the numbers that are within the range of 1 - 100.
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i, " <--is an even number");
//   } else { console.log(i); }
// }
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number".
//
// 🔴 Commit.
//
// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
// Example Output:
for (let i = 0; i <= 100; i++) {
  if ( i % 3 === 0 && i % 5 === 0) {
    console.log(`I found a ${i}. Three is a crowd. High five!`)
  } else if ( i % 3 === 0) {
    console.log(`I found a ${i}. Three is a crowd.`)
  } else if ( i % 5 === 0) {
    console.log(`I found a ${i}. High five!`)
  }
}
// I found a 5. High five!
// I found a 10. High five!
// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.
// Example Output:
//
// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!
// For numbers divisible by both three and five, be sure your code prints both messages.
// 🔴 Commit.
//
// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your banck_account should have $55 in it.
let bank_account = 0;
for (let i = 1; i <= 100; i++) {
  // console.log(i);
  // console.log(bank_account);
  bank_account += i*2;
  // console.log(bank_account);
}
console.log(bank_account);
// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your banck_account should have $10,100 in it.
//
// 🔴 Commit.
//
// E. Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000. If a previous question you've done has helpful bits of code in it that partially solves this problem, look back at them.
// Solved previously
// You just solved Project Euler problem 1!
//
// Are you having dejà vu? This just in! From the "Read the entire problem before you start" dept: This problem was on a previous assignment. You may skip it if you've already done it, just include a comment saying that you've already done it. If you've now done the problem twice, perhaps next time you'll read the whole problem before starting it.
//
// 🔴 Commit.
//
// III. Arrays & Control flow
// A. Talk about it:
// What are the things in an array called?
// elements
// Do Arrays guarantee those things will be in order?
// nope
// What real-life thing could you model with an array?
// a box?
// 🔴 Commit.
//
// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes.
const quotes = ["You're an animal, Rock", "If he dies, he dies.", "Ding ding"]
// 🔴 Commit.
//
// C. Accessing elements
// Given the following array const
randomThings = [1, 10, "Hello", true]
// How do you access the 1st element in the array?
//randomThings[0];
// Change the value of "Hello" to "World".
randomThings[2] = "World";
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings);
// 🔴 Commit.
//
// D. Change values
// Given the following array
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// What would you write to access the 3rd element of the array?
ourClass[2];
// Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat"
// Add a new element, "Cloud City" to the array.
ourClass.push("Cloud City");
console.log(ourClass);
// 🔴 Commit.
//
// E. Mix It Up
// Note: You don't really need .splice() for these. You could use it, but there are simpler array methods that are more appropriate.
//
// Given the following array:
const myArray = [5, 10, 500, 20]
//
// Add the string "Egon" to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Egon");
myArray.push("Venkman");
// Remove the 5 from the beginning of the array.
myArray.shift();
// Add the string "Bob Marley" to the beginning of the array.
myArray.unshift("Bob Marley");
// Remove the string of your choice from the end of the array.
myArray.pop();
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?
console.log(myArray.reverse());
//yes, this did mutat the array. Mutate means to change the original. Reverse actaully returns the mutated array.
// 🔴 Commit.
//
// F. Biggie Smalls
// Create a variable that contains an integer.
const int = 6;
// Write an if ... else statement that:
//
// console.log()s "little number" if the number is entered is less than 100
if (int < 100) {
  console.log('little number');
} else { console.log('big number'); }
// console.log()s big number if the number is greater than or equal to 100.
//
// 🔴 Commit.
//
// G. Monkey in the Middle
// Write an if ... else if ... else statement:
if (int < 5) {
  console.log('little number');
} else if (int > 10) {
  console.log('big number');
} else { console.log('monkey');}
// console.log() little number if the number entered is less than 5.
//
// If the number entered is more than 10, log big number.
//
// Otherwise, log "monkey".
//
// 🔴 Commit.
//
// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
//
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")
// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, "raybans");
console.log(kristynsCloset);
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset[5] = "stained knit hat";
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
const shirt = thomsCloset[0][0];
// In the same way, access one item from Thom's pants array.
const pants = thomsCloset[1][0];
// Access one item from Thom's accessories array.
const accessory = thomsCloset[2][1];
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Oh wow. Thom's ${shirt}, ${pants}, and ${accessory} go really nicely together.`)
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset);
// 🔴 Commit.
//
// IV. Functions
// A. printGreeting
// Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?
//
// Like so?
//
// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!
//
// You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.
//
// 🔴 Commit.
//
// B. printCool
// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.
const printCool = function(name) {
  console.log(`${name} is cool`);
}
console.log(printCool("Captain Reynolds"));
// => "Captain Reynolds is cool";
//
// 🔴 Commit.
//
// C. calculateCube
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
const calculateCube = (num) => {
  console.log(num*num*num);
  //also possible, num**3
}
console.log(calculateCube(5));
// => 125
//
// 🔴 Commit.
//
// D. isVowel
// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
const isVowel = function(char) {
  const vowels = ["a","e","i","o","u"]
  for (let i = 0; i < vowels.length; i++) {
    if (char.toLowerCase() === vowels[i]) {
      return true;
    }
  }
  return false;
}
console.log(isVowel("a"));
// => true
//
// 🔴 Commit.
//
// E. getTwoLengths
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
const getTwoLengths = function(word1, word2) {
  const length1 = word1.length;
  const length2 = word2.length;
  const words = [length1, length2];
  return words;
}
console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]
//
// 🔴 Commit.
//
// F. getMultipleLengths
// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
const getMultipleLengths = function(arr) {
  const lengthArray = [];
  for (let i = 0; i < arr.length; i++) {
    lengthArray.push(arr[i].length);
  }
  return lengthArray;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// => [5, 4, 2, 2, 4]
//
// 🔴 Commit.
//
// G. maxOfThree
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
const maxOfThree = function(num1, num2, num3) {
  const numArr = [num1, num2, num3];
  let maxNum = 0;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > maxNum) {
      maxNum = numArr[i];
    }
  }
  return maxNum;
}
console.log(maxOfThree(19, 9, 21));
// => 9
//
// Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().
//
// 🔴 Commit.
//
// H. printLongestWord
// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
const printLongestWord = function(arr) {
  let longestWord = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }
  return longestWord;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"
//
// 🔴 Commit.
//
// I. transmogrify
// Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.
const transmogrify = function(num1, num2, num3) {
  return ((num1*num2)**num3);
}
// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.
//
// For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.
//
console.log(transmogrify(5, 3, 2));
// => 225
//
// 🔴 Commit.
//
// J. reverseWordOrder v2
// Without using .split(), .reverse(), or .join(), write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.
const reverseWordOrder = function(string) {
  //create a word holder, a spaceIndex holder, and a wordsArray
  let word = "";
  let spaceIndex = 0;
  const wordsArray = [];
  let newString = "";
  // console.log(string.length, "<-----string length");
  //loop through string looking for a space
  for (let i = spaceIndex; i < string.length; i++) {
    //add letters to word holder one at a timeout
    //if there's a space OR you reach the end, everything before it is a word.
    // console.log(i, "<-----i before if check");
    word += string[i]
    // console.log(word, "<-----word");
    if (string[i] === " " || i === string.length - 1) {
      //add word to wordsArray
      // console.log("hit a space or the end");
      wordsArray.push(word);
      // console.log(wordsArray, "<----wordsArray in loop");
      //reset word holder after adding it to array
      word = "";
      //keep track of index when space is found - use spaceIndex
      spaceIndex = i+1;
      // console.log(spaceIndex, "<-----spaceIndex");
    }
  }
  for (let i = wordsArray.length - 1; i >= 0; i--) {
    if (i === wordsArray.length - 1) {
      newString += (wordsArray[i] + " ");
      console.log(newString, "<-----first word");
    } else if (i === 0){
      newString += (wordsArray[i].slice(0,-1));
      console.log(wordsArray[i], "<------first wordsArray element");
      console.log(wordsArray[i].slice(0,-1), "<-----wordsArray[i].slice(0,-1)");
      console.log(newString, "<-----last word");
    } else {
      newString += wordsArray[i]
      console.log(newString, "<------middle word")
    }
  }
  return newString;

}
// See if you can do it without googling.
//
// Remember: You can index directly into a string:
//
// "hello world"[7]
// => "o"
//
// That and basic loops and variables and arrays are all you need to solve this without the Array methods.
//
console.log(reverseWordOrder("Ishmael me Call"));
// => "Call me Ishmael"
//
console.log(reverseWordOrder("I use Lâncome on my comb"));
// => "comb my on Lâncome use I"
//
// 🔴 Commit.
//
// K. Get down and dirty with Math.random()
// Write a function that will return a random integer between 1 and 10. Test it.
const getRandomInt = function(num1=1, num2=10) {
  let randomInt = Math.floor(Math.random()*num2);
  if (randomInt < num1) {
    randomInt += num1;
  }
  return randomInt;
}

// console.log(getRandomInt());
// Write a function that will return a random integer between 10 and 100. Test it.
console.log(getRandomInt(10,100));
// Write a function that will return a random number between 532 and 13267. Test it.
const getRandomNum = function(num1=1, num2=10) {
  let randomNum = (Math.random()*num2)+0.01*num2;
  if(randomNum < num1) {
    randomNum += num1;
  }
  return randomNum;
}

console.log(getRandomNum(532,13267));
// Write a function that will return a random number between 1 and 10. Test it.
console.log(getRandomNum());
// Add a few more quotes to the quotes array from question III-B-1 above. Write a function that will take an array as a parameter, and return a random element from that array. Call your function a few times, passing in the quotes array. Give it a nice semantic name like getRandomElement.
const rockyQuotes = ["You're an animal, Rock", "If he dies, he dies.", "Ding ding", "Adriaaaaaan", "Cut me, Mick!", "Nothing's over, just give me something to drink!"]
const getRandomElement = function(array) {
  const randomElement = array[getRandomInt(0, array.length)];
  return randomElement;
}
console.log(getRandomElement(rockyQuotes));
// 🔴 Commit.
//
// Objects
// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.
//
// A. Make a user object
// Create an object called user.
const user = {
  name: "Johnny",
  email: "JB@email.com",
  age: 12,
  purchased: []
}
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.
// 🔴 Commit.
//
// B. Update the user
// Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.
// Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++
console.log(user["email"] = "JohnJohn@email.com");
console.log(++user.age);
// 🔴 Commit.
//
// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.
console.log(user["location"] = "Panama");
// Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).
// 🔴 Commit.
//
// D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
user.purchased.push("carbohydrates", "peace of mind", "Merino jodhpurs");
console.log(user.purchased[2]);
// Console.log just the "Merino jodhpurs" from the purchased array.
// 🔴 Commit.
//
// E. Object-within-object
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.
//
// If we want to give our user a friend with a name and age, we could write:
//
// user.friend = {
//     name: "Grace Hopper",
//     age: 85
// }
// When we console.log user, we would see the friend object added to our user object.
//
// Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)
user.friend = {
  name: "James",
  age: 12,
  location: "Pomona",
  purchased: []
}
// Console.log just the friend's name
console.log(user.friend.name);
// Console.log just the friend's location
console.log(user.friend.location);
// CHANGE the friend's age to 55
console.log(user.friend.age = 55);
// The friend has purchased "The One Ring". Use .push() to add "The One Ring" to the friend's purchased array.
// The friend has purchased "A latte". Use .push() to add "A latte" to the friend's purchased array.
user.friend.purchased.push("The One Ring", "A latte");
console.log(user.friend.purchased[1]);
// Console.log just "A latte" from the friend's purchased array.
// 🔴 Commit.
//
// F. Loops
// Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
for (let i = 0; i < user.purchased.length; i++) {
  console.log(user.purchased[i]);
}
// Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.
for (let i = 0; i < user.friend.purchased.length; i++) {
  console.log(user.friend.purchased[i]);
}
// 🔴 Commit.
//
// G. Functions can operate on objects
// Write a single function updateUser that takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a return statement, it will merely modify the user object.
const updateUser = function() {
  user.age++;
  user.name.toUpperCase();
}
// Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our user object, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoud function with user as the argument.
const oldAndLoud = function(person) {
  console.log(person.age++);
  console.log(person.name.toUpperCase());
}
oldAndLoud(user);
// 🔴 Commit.
//
//
// Hungry for More?
// Cat Combinator
// 1. Mama cat
// Define an object called cat1 that contains the following properties:
//
// name
// breed
// age (a number)
// console.log the cat's age
//
// console.log the cat's breed
//
// 2. Papa cat
// Define an object called cat2 that also contains the properties:
// name
// breed
// age (a number)
// 3. Combine Cats!
// The cats are multiplying!
//
// Write a function combineCats that has two parameters mama, and papa. The function will take two arguments -- each a cat object.
//
// Pass cat1 and cat2 as arguments to the combineCats function. The function should console.log them.
// Example:
//
// combineCats(cat1, cat2)
// { name: "Joe", age: 19, breed: "Mog" }
//
// { name: "Jam", age: 45, breed: "Siamese" }
//
// This is to demonstrate that functions can take objects as arguments
//
// You could also invoke the combineCats function by writing the objects straight into the parentheses:
//
// combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" });
//
// Make it so the combineCats function will return a combination of the two incoming cats
// The result should be an object wherein the
// name is a concatenation of the parents' names
// the age is 1
// the breed is each of the parents' breeds with a hyphen in between
// Example:
//
// console.log(combineCats(cat1, cat2));
// Result:
//
//
//
// This is to demonstrate that a function can return an object
//
//
// 4. Cat brain bender
// If combineCats returns an object, and if combineCats takes objects as arguments, then it stands to reason that:
//
// catCombinator can use itself as its own argument.
//
// Take a second to stew on that . . .
//
// What is the result of:
//
// console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
// Whoa . . .
//
// The above console.log is two levels deep of combineCats.
//
// Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.
