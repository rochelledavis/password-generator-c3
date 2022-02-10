// // Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Arrays for password content
var lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "|", "~"];


//function to determine contents of the password
function generatePassword() {
    window.alert("Hello! Please answer the following questions to generate your own personalized password.");
    var charCountSelect = parseInt(window.prompt("How many characters would you like in your password? Please select a number from 8-128."));
        while(charCountSelect <= 7 || charCountSelect >= 129) {
            window.alert("Please pick a number between 8-128.");
            var charCountSelect = parseInt(window.prompt("How many characters would you like in your password? Please select a number from 8-128."));
        }
        
        window.alert("Your password will have " + charCountSelect + " characters.");

    var lowerCaseSelect = window.confirm("Would you like to include lowercase letters?");
    console.log(lowerCaseSelect)
    var upperCaseSelect = window.confirm("Would you like to include upper case letters?");
    console.log(upperCaseSelect)
    var numberSelect = window.confirm("Would you like to include numbers?");
    console.log(numberSelect)
    var symbolSelect = window.confirm("Would you like to include symbols?");
    console.log(symbolSelect)

    var selectedCharacters = []

    if (!lowerCaseSelect, !upperCaseSelect, !numberSelect, !symbolSelect) {
        window.alert("You need to make at least one selection. Please try again")
         var lowerCaseSelect = window.confirm("Would you like to include lowercase letters?");
         var upperCaseSelect = window.confirm("Would you like to include upper case letters?");
         var numberSelect = window.confirm("Would you like to include numbers?");
         var symbolSelect = window.confirm("Would you like to include symbols?");
    }
        

    if (lowerCaseSelect) {
        selectedCharacters = selectedCharacters.concat(lowerAlpha)
    }

    if (upperCaseSelect) {
        selectedCharacters = selectedCharacters.concat(upperAlpha)
    }

    if (numberSelect) {
        selectedCharacters = selectedCharacters.concat(numbers)

    }

    if (symbolSelect) {
        selectedCharacters = selectedCharacters.concat(symbols)
    }
    
    console.log(selectedCharacters)

    var password = ""

    for (var i = 0; i < charCountSelect; i++) {
        var getRandomCharacter = selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];
        password += getRandomCharacter
        console.log(getRandomCharacter)
    }
    return password
} 

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }