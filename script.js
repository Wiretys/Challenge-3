// pick password length prompt
var pwlen = window.prompt("Please pick a password length between 8 to 128.");

// verify length
while (pwlen < 8 || pwlen > 128) {
    var pwlen = window.prompt("Incorrect: Please a number for a password length between 8 to 128.");
}

//lowercase verification
var lowercaseConfirm = window.confirm("Will this password require lowercase characters?");

//uppercase verification
var uppercaseConfirm = window.confirm("Will this password require uppercase characters?");

//numeric verification
var numConfirm = window.confirm("Will this password require numbers?");

//special characters verification
var specialConfirm = window.confirm("Will this password require special characters?");

//empty strings to protect from undefined
var currentstr = "";
var lwerRand = "";
var upprRand = "";
var numRand = "";
var speclRand = "";

//while loop to make passwork string
while (pwlen > currentstr.length) {

  //lowercase randomized
  if (lowercaseConfirm = true) {
    var lwerCaseVar = (
    Math.floor(Math.random() * 26));
    var lowerstr = "abcdefghijklmnopqrstuvwxyz";
    var lwerRand = lowerstr.charAt(lwerCaseVar, lwerCaseVar);
   }

  //uppercase randomized
  if (uppercaseConfirm = true) {
    var upprCaseVar = (
    Math.floor(Math.random() * 26));
    var upperstr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var upprRand = upperstr.charAt(upprCaseVar, upprCaseVar);
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
    var speclRand = speclStr.charAt(speclCaseVar, speclCaseVar);
  }
  currentstr = (lwerRand + upprRand + numRand + speclRand + currentstr);
  if (currentstr.length > pwlen) {
    var generatePassword = function () {
    return currentstr;          
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