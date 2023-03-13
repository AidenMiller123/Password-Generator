
function generatePassword() {
  // var passwordLength = Number(prompt("How many characters: (password must be between 8 and 124 characters)?"))
  //  var characterType = prompt("What character types would you like?: special, numeric, uppercase, lowercase")
  var passwordLength = 0;
 
var characterSet = "";

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var specialCharacters = "!@#$%^&*?";
var password = "";


var passwordLength = prompt("How many characters: (password must be between 8 and 124 characters)?");
  if (passwordLength < 8 || passwordLength > 124) {
    do {
      alert("Please Enter password betweeen 8 and 124 characters");
      passwordLength = prompt("How many characters: (password must be between 8 and 124 characters)?");
    }
    while (passwordLength < 8 || passwordLength > 124);
  }

  if (passwordLength) {
   parseInt(passwordLength);
  }


var numericOption = confirm("Would you like to add numbers to your password?");

  if (numericOption) {
    characterSet += numeric;
  }

var lowercaseOption = confirm("Would you like to add lowercase characters to your password?");

  if (lowercaseOption) {
    characterSet += lowerCase;
  }

var upperCaseOption = confirm("Would you like to add uppercase characters to your password?");

  if (upperCaseOption) {
    characterSet += upperCase;
  }

var specialCharactersOptions = confirm("Would you like to add special characters to your password?");

  if (specialCharactersOptions) {
    characterSet += specialCharacters;
  }




for (var i = 0; i <= passwordLength; i++) {
    // retreiveValue = Math.floor(Math.random * 10);
    var retreiveValue = Math.floor(Math.random() * characterSet.length);
    password += characterSet.substring(retreiveValue, retreiveValue + 1);
    console.log("I :" + i)
  }
  if (characterSet.length === 0) {
    password = "No criteria selected.  Password not generated";
  }

  return password;
}

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



