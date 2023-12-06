// Practice Set of Chapter 1 "Alerts"
// alert("Hello World");
// alert("Chapter 1 Practice Done!");


// Practice Set of Chapter 2 "Variables for Strings"
let str1 = "This is my First String";
console.log(str1);

let thanx = "Thanks for your input!"
// alert(thanx);


// Practice Set of Chapter 3 "Variables for Numbers"
let weight = 150;
console.log(weight);
weight = weight + 50;
console.log(weight);

// correct
let originalNum = 23;
let newNum = 7;
let finalNum = originalNum + newNum;
console.log(finalNum);

// wrong
let OriginalNum = "23";
let NewNum = "7";
let FinalNum = originalNum += newNum;
console.log(FinalNum);


// Practice Set of Chapter 4 "Variable Names Legal and Illegal"
/*  
1. The name of a variable can't be a number or start with a number.
2. It can't be any of JavaScript's keywords. the special words that act as programming instructions, like alert and var.
3. Though a variable name can't be any of JavaScript's keywords, it can contain keywords. For example, userAlert and myVar are legal.  
*/


// Practice Set of Chapter 5 "Math expressions: Familiar operators"
var popularNumber = 4;          //Both are Same 
var popularNumber2 = 2 + 2;     //Both are Same 
var egMinus = 2 - 2;
var egMultiply = 2 * 2;
var egDivide = 2 / 2;


// Practice Set of Chapter 6 "Math expressions: Unfamiliar operators"
let num = num++;          //Both are Same
let num2 = num2 + 1;      //Both are same
console.log(num1);


var num1 = 1;
var newNum3 = num--;
// Both are Different
var num3 = 1;
var newNum2 = --num;

// Practice Set of Chapter 7 "Math expressions: Eliminating ambiguity"
// Complex Mathematics
var totalCost = 1 + 3 * 4;
var totalCost = 1 + (3 * 4);
var resultOfComputation = (2 * 4) * 4 + 2;
resultOfComputation = ((2 * 4) * 4) + 2;


// Practice Set of Chapter 8 "Concatenating text strings"
var userName = "Sir Basit";
console.log("Thanks, " + userName + "!");
// Both are Same
var message = "Thanks, ";
var userName = "Sir Basit";
var banger = "!";
console.log(message + userName + banger);
// Both are Same
var customMess = message + userName + banger;
console.log(customMess);


// Practice Set of Chapter 9 "Prompts"
// A prompt box asks the user for some information and provides a response field for her answer

var spec = prompt("Your species?", "human");

var question = "Your species?";
var defaultAnswer = "human";
var spec = prompt(question, defaultAnswer);


// Practice Set of Chapter 10 "if statements"
var x = prompt("Where does the Pope live?");
if (x === "Vatican") {
    alert("Correct!");
}
// or
var correctAnswer = "Vatican";
if (x === correctAnswer) {
    alert("Correct!");
}

// When a condition is met, you can have any number of statements execute.
if (x === correctAnswer) {
    score++;
    userIQ = "genius";
    alert("Correct!");
}


if (x === correctAnswer) {
    alert("Correct!");
}


// Practice Set of Chapter 11 "Comparison operators"
// ===        Equals to | it checks the value and type of variable
// !==        Not Equals to | it is opposite to the first one means it's not equals to. '!' means not
// >          Greater than
// <          Less than
// >=         Greater than or equal to
// <=         Less than or equal to


// Practice Set of Chapter 12 "if...else and else if statements"
if (x === "Vatican") {
    alert("Correct answer!");
} else {
    alert("Wrong answer");
    score--;
    userIQ = "problematic";
}

var correctAnswer = "Vatican";
if (x === correctAnswer) {
    alert("Correct!");
}
else if (x === "Rome") {
    alert("Incorrect but close");
}
else {
    alert("Incorrect");
}


// Practice Set of Chapter 13 "Testing sets of conditions"
if (weight > 300 && time < 6) {
    alert("Come to our tryout!");
}
else {
    alert("Come to our cookout!");
}

if (weight > 300 && time < 6 && age > 17 && gender === "male") { }

if (SAT > avg || GPA > 2.5 || sport === "football") { }


// Practice Set of Chapter 14 "if statements nested"
if ((x === y || a === b) && c === d) {
    g = h;
}
else {
    e = f;
}
// Both are Same
if (c === d) {
    if (x === y) {
        g = h;
    }
    else if (a === b) {
        g = h;
    }
    else {
        e = f;
    }
}
else {
    e = f;
}


// Practice Set of Chapter 15 "Arrays"
var city0 = "Atlanta";
var city1 = "Baltimore";
var city2 = "Chicago";
var city3 = "Denver";
var city4 = "Los Angeles";
var city5 = "Seattle";
// Both are Same
var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];

console.log("Welcome to " + cities[3]);
//3 is index of JavaScript which contains Denver Because JavaScript's index starts with 0

let mixedArray = [1, "Bob", "Now is", true];


// Practice Set of Chapter 16 "Arrays: Adding and removing elements"
var pets = [];
pets[0] = "dog";
pets[1] = "cat";
pets[2] = "bird";

// Also Legal
pets[3] = "lizard";
pets[6] = "snake";

// Using the keyword, pop, you can remove the last element of an array
pets.pop();

// Using the keyword, push, you can add one or more elements to the end of an array
pets.push("fish", "ferret");


// Practice Set of Chapter 17 "Arrays: Removing, inserting, and extracting elements"
// Use the shift method to remove an element from the beginning of an array
pets.shift();

// To add one or more elements to the beginning of an array, use the unshift method
pets.unshift("fish", "ferret");

// Use the splice method to insert one or more elements anywhere in an array
pets.splice( 2, 2, "pig", "duck", "emu"); //it will remove 2 items from the index 2

pets.splice(2, 0, "pig", "duck", "emu"); //it will only add 2 items to the array at index 2

// Use the slice method to copy one or more consecutive elements in any position and put them into a new array
var noPets = pets.slice(2, 4);

// NOTE: Splice does not changes/affect the original array while slice does!