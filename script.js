// // Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Arrays for password content
var lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "|", "~"];

//Generating random charachters
var getRandomLower = lowerAlpha[Math.floor(Math.random() * lowerAlpha.length)];
var getRandomUpper = upperAlpha[Math.floor(Math.random() * upperAlpha.length)];
var getRandomNumber = numbers[Math.floor(Math.random() * numbers.length)];
var getRandomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
console.log(getRandomLower)
console.log(getRandomUpper)
console.log(getRandomNumber)
console.log(getRandomSymbol)

//function to determine contents of the password
function generatePassword() {
    window.alert("Hello! Please answer the following questions to generate your own personalized password.");
    var charCountSelect = parseInt(window.prompt("How many charachters would you like in your password? Please select a number from 8-128."));
    var lowerCaseSelect = window.prompt("Would you like to include lowercase letters? Enter YES or NO.");
    var upperCaseSelect = window.prompt("Would you like to include upper case letters? Enter YES or NO.");
    var numberSelect = window.prompt("Would you like to include numbers? Enter YES or NO.");
    var symbolSelect = window.prompt("Would you like to include symbols? Enter YES or NO.");

    var selectedCharacters = []

    if (lowerCaseSelect) {
        selectedCharacters.concat(lowerAlpha)
    }

    if (upperCaseSelect) {
        selectedCharacters.concat(upperAlpha)
    }

    if (numberSelect) {
        selectedCharacters.concat(numbers)

    }

    if (symbolSelect) {
        selectedCharacters.concat(symbols)
    }
    var password = ""
    for (var i = 0; i < charCountSelect; i++) {
        var getRandomCharacter = selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];
        password += getRandomCharacter
    }
    return password
} 