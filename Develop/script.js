// Assignment code here
var generateBtn = document.querySelector("#generate");
var finalpassword = []
var possibleCharacters=[]
var Specialchar = ['!','@','#','$','%','^','&','*']
var numbers = [0,1,2,3,4,5,6,7,8,9]
var upperCasechar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerCasechar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

 

function generatePassword(){
  
  // function to randomize array
  function random(arr) {
    let randomNumber = Math.floor(Math.random() * arr.length);
    return arr[randomNumber];
  }
  // User prompts
  let specialCharacters = confirm('Do you want special charecters?(yes/no)');

  let upperCase = confirm('Do you want upper case letters?(yes/no)');

  let lowerCase = confirm('Do you want lower case letters?(yes/no)');

  let includeNumbers = confirm('Do you want numbers?(yes/no)');
  
  let passwordLength = prompt('How long would you like your password?(8 to 128)');
  
  if (passwordLength < 8 || passwordLength > 128) {
    alert('Error! select number between 8 - 128');
    return null;
  }

if(specialCharacters){
  possibleCharacters = possibleCharacters.concat(Specialchar)
 };
 if(upperCase){
  possibleCharacters = possibleCharacters.concat(upperCasechar)
 };
 if(lowerCase){
  possibleCharacters = possibleCharacters.concat(lowerCasechar)
 };
 if(includeNumbers){
  possibleCharacters = possibleCharacters.concat(numbers)
 };
 for(let i = 0; i < passwordLength; i++) {
  let character = random(possibleCharacters);
  finalpassword.push(character);
};

return finalpassword.join('')

}

// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
