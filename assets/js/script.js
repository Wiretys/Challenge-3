// pick password length prompt
var passwordLength = window.prompt("Please pick a password length between 8 to 128.");

//reset varible confirms
var lowerCaseConfirm = false;
var upperCaseConfirm = false;
var numConfirm = false;
var specialConfirm = false;

// verify length and type of characters to use
if (passwordLength < 8 || passwordLength > 128) {
  var passwordLength = window.prompt("Incorrect: Please a number for a password length between 8 to 128.");
} else {
  //lowercase verification
  var lowerCaseConfirm = window.confirm("Will this password require lowercase characters?");
  //uppercase verification
  var upperCaseConfirm = window.confirm("Will this password require uppercase characters?");
  //numeric verification
  var numConfirm = window.confirm("Will this password require numbers?");
  //special characters verification
  var specialConfirm = window.confirm("Will this password require special characters?");
}

//empty strings to protect from undefined
var currentString = "";
var lowerLetterRand = "";
var upperLetterRand = "";
var numRand = "";
var specialRand = "";

//while loop to make password string
while (passwordLength > currentString.length) {
  //lowercase randomized
  if (lowerCaseConfirm = true) {
    var lwerCaseVar = (
      Math.floor(Math.random() * 26));
    var lowerstr = "abcdefghijklmnopqrstuvwxyz";
    var lowerLetterRand = lowerstr.charAt(lwerCaseVar, lwerCaseVar);
  }
  //uppercase randomized
  if (upperCaseConfirm = true) {
    var upprCaseVar = (
      Math.floor(Math.random() * 26));
    var upperstr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var upperLetterRand = upperstr.charAt(upprCaseVar, upprCaseVar);
  }
  // function to generate a random numeric value
  if (numConfirm = true) {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    var numRand = (getRandomInt(9));
  }
  // function to generate a random special character
  if (specialConfirm = true) {
    var speclCaseVar = (
      Math.floor(Math.random() * 22));
    var speclStr = ".[]{}()<>*+-=!?^$|";
    var specialRand = speclStr.charAt(speclCaseVar, speclCaseVar);
  }
  currentString = (lowerLetterRand + upperLetterRand + numRand + specialRand + currentString);
  if (currentString.length > passwordLength) {
    var generatePassword = function () {
      return currentString;
    }
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);