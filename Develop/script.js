// Assignment code here
var generateBtn = document.querySelector("#generate");

function characterCodes(low, high){
  let array = []
  for( let i = low; i <= high; i++){
    array.push(i)
  }
  return array
}


let numbers = characterCodes(48, 57)
let upperCaseletters = characterCodes(97,122)
let lowerCaseletters = characterCodes(65,90)
let characters = characterCodes(33,47).concat(characterCodes(58,64)).concat(characterCodes(91,96)).concat(characterCodes(123,126))



function generatePassword(){
  // User prompts
  var passwordCharecters = confirm('Do you want special charecters?(yes/no)')

  var upperCase = confirm('Do you want upper case letters?(yes/no)')

  var lowerCase = confirm('Do you want lower case letters?(yes/no)')

  var includeNumbers = confirm('Do you want numbers?(yes/no)')

  var passwordLength = prompt('How long would you like your password?(8 to 128)')
  
  if (passwordLength < 8 || passwordLength > 128) {
    alert('Error! select number between 8 - 128');
    return null;
  }


  if(passwordCharecters){

  }

 
}

// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
