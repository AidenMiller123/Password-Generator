// created function to generate password
function generatePassword() {
// creats variable for password length and charcter sets and sets them to 0 and blank
var passwordLength = 0;
var characterSet = "";
// creates variables for each character type 
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var specialCharacters = "!@#$%^&*?";
// sets password to blank
var password = "";

// Prompt that asks how long password should be
var passwordLength = prompt("How many characters: (password must be between 8 and 124 characters)?");
  if (passwordLength < 8 || passwordLength > 124) {
    do {
      // does this action if user input is <8 and >124
      alert("Please Enter password betweeen 8 and 124 characters");
      passwordLength = prompt("How many characters: (password must be between 8 and 124 characters)?");
    }
    while (passwordLength < 8 || passwordLength > 124);
  }
  // changes passwordlength from string to interger
  if (passwordLength) {
   parseInt(passwordLength);
  }

// asks user if they would like to add numbers to password
var numericOption = confirm("Would you like to add numbers to your password?");
// if user agrees then this if statment adds numeric to password
  if (numericOption) {
    characterSet += numeric;
  }
//  asks user if they would like to add lowercase characters to password
var lowercaseOption = confirm("Would you like to add lowercase characters to your password?");
// if user agrees then this if statment adds lowercase to password
  if (lowercaseOption) {
    characterSet += lowerCase;
  }
//asks user if they would like to add uppercase characters to password
var upperCaseOption = confirm("Would you like to add uppercase characters to your password?");
// if user agrees then this if statment adds uppercase to password
  if (upperCaseOption) {
    characterSet += upperCase;
  }
// asks user if they would like to add special characters to password
var specialCharactersOptions = confirm("Would you like to add special characters to your password?");
// if user agrees then this if statment adds special characters to password
  if (specialCharactersOptions) {
    characterSet += specialCharacters;
  }
// for loop that generates random string 
for (var i = 0; i <= passwordLength; i++) {
    var retreiveValue = Math.floor(Math.random() * characterSet.length);
    password += characterSet.substring(retreiveValue, retreiveValue + 1);
    console.log("I :" + i)
  }
  // if no criteria was selected then password show this statment
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



