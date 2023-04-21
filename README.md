# Password Generator Starter Code
# module-03-challenge
  var specialCharectersinput = prompt('Do you want special charecters?(yes/no)').toLowerCase();
  var upperCaseinput = prompt('Do you want upper case letters?(yes/no)').toLowerCase();
  var lowerCaseinput = prompt('Do you want lower case letters?(yes/no)').toLowerCase();
  var numbersinput = prompt('Do you want numbers?(yes/no)').toLowerCase();
  var passwordlengthinput = Number(prompt('How long would you like your password?(8 to 128)'));

  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLenght= passwordlengthinput;
  var upperCase = upperCaseinput;
  var lowerCase= lowerCaseinput;
  var number= numbersinput;


function characterCodes(low, high){
  let array = []
  for( let i = low; i <= high; i++){
    array.push(i)
  }
  return array
}

//possible password characters
let possiblePasswordsCharacters=[]
let numbers = characterCodes(48, 57)
let upperCaseletters = characterCodes(97,122)
let lowerCaseletters = characterCodes(65,90)
let characters = characterCodes(33,47).concat(characterCodes(58,64)).concat(characterCodes(91,96)).concat(characterCodes(123,126))


  
 
 for(let i = 0; i < passwordLength; i++) {
  let character = random(possibleCharacters);
  finalpassword.push(character);
}

 
return finalpassword

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


  