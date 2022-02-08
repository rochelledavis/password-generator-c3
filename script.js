// // Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowerCaseOpt = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseOpt = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersOpt = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbolsOpt = ["#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "|", "~"];

var getRandomLower = lowerCaseOpt[Math.floor(Math.random() * lowerCaseOpt.length)];
var getRandomUpper = upperCaseOpt[Math.floor(Math.random() * upperCaseOpt.length)];
var getRandomNumber = numbersOpt[Math.floor(Math.random() * numbersOpt.length)];
var getRandomSymbol = symbolsOpt[Math.floor(Math.random() * symbolsOpt.length)];
console.log(getRandomLower)
console.log(getRandomUpper)
console.log(getRandomNumber)
console.log(getRandomSymbol)

function writePassword() {
    window.alert("Hello! Please answer the following questions to generate your own personalized password.");
    window.prompt("How many charachters would you like in your password? Please select a number from 8-128.");
    window.prompt("Would you like to include lowercase letters? Enter YES or NO.");
    window.prompt("Would you like to include upper case letters? Enter YES or NO.");
    window.prompt("Would you like to include numbers? Enter YES or NO.");
    window.prompt("Would you like to include symbols? Enter YES or NO.");
} 