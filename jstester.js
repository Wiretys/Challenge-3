// pick password length prompt
var pwlen = window.prompt("Please pick a password length between 8 to 128.");

// verify length
while (pwlen < 8 || pwlen > 128) {

    var pwlen = window.prompt("Incorrect: Please a number for a password length between 8 to 128.");
}

//lowercase verification
var lowercaseConfirm = window.confirm("Will this password require lowercase characters?");

if (lowercaseConfirm) {
    var lwerCase = "yes";

} else {
    var lwerCase = "no";
}

//uppercase verification
var uppercaseConfirm = window.confirm("Will this password require uppercase characters?");

if (uppercaseConfirm) {
    var upprCase = "yes";

} else {
    var upprCase = "no";
}

//numeric verification
var numConfirm = window.confirm("Will this password require numbers?");

if (numConfirm) {
    var numCase = "yes";

} else {
    var numCase = "no";
}

//special characters verification
var specialConfirm = window.confirm("Will this password require special characters?");

if (specialConfirm) {
    var speclCase = "yes";

} else {
    var speclCase = "no";
}

var genpwLen = 0;
//empty string

var currentstr = "";

while (pwlen > currentstr.length) {

    //lowercase randomized
    if (lwerCase = "yes") {
        var lwerCaseVar = (
            Math.floor(Math.random() * 26));
        var lowerstr = "abcdefghijklmnopqrstuvwxyz";
        var lwerRand = lowerstr.charAt(lwerCaseVar, lwerCaseVar);
    }



    //uppercase randomized
    if (upprCase = "yes") {
        var upprCaseVar = (
            Math.floor(Math.random() * 26));
        var upperstr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var upprRand = upperstr.charAt(upprCaseVar, upprCaseVar);
    }



    // function to generate a random numeric value
    if (numConfirm = "yes") {
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        var numRand = (getRandomInt(9));
    }



    // function to generate a random special character
    if (speclCase = "yes") {
        var speclCaseVar = (
            Math.floor(Math.random() * 22));
        var speclStr = ".[]{}()<>*+-=!?^$|";
        var speclRand = speclStr.charAt(speclCaseVar, speclCaseVar);
    }

    currentstr = (lwerRand + upprRand + numRand + speclRand + currentstr);

    if (currentstr.length > pwlen) {
        break;
    }
}
