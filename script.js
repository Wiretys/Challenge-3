// Assignment code here

var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');


var pwlength = window.prompt("Please pick a character length between 8 to 128.");


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var pwlenghtquestion = function() {


  if (pwlength < 8 && pwlength > 128) {
    pwlenghtquestion();
  
    var pwlength = window.prompt("Please pick a character length between 8 to 128.");

  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
