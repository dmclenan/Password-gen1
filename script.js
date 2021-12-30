// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var specialCharaters = "@%+\\/'!#$^?:,)(}{][~-_.";

var numericCharacters = "0123456789";

var lowerCasedCharacters = "abcdefghijklmnopqrstuvwxyz";

var upperCasedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


function generatePassword() {
  var passwordLength = prompt("Enter the lenght of your password");
  console.log(passwordLength);

  var hasNumbers = confirm("inlude numbers?")
  console.log(hasNumbers);

  var hasSpecialCharacters = confirm("Include special characters?")
  console.log(hasSpecialCharacters)

  var hasUpperCase = confirm("include uppercase");
  console.log(hasUpperCase)

  var hasLowercase = confirm("include uppercase");
  console.log(hasLowercase)


  var choices = ""
  var final = ""

  if (hasNumbers) {
    choices += numericCharacters
  } if (hasSpecialCharacters) {
    choices += specialCharaters
  } if (hasUpperCase) {
    choices += upperCasedCharacters
  } if (hasLowercase) {
    choices += lowerCasedCharacters
  }

for (var i = 0; i < passwordLength; i++) {
  var char = Math.floor(Math.random() * choices.length)
final += choices[char]}
  console.log(final)
  return final
}




// Add event listener to generate button


