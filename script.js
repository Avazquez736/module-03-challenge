var generateBtn = document.querySelector("#generate");


 let finalpassword = []
 let possibleCharacters=[]
 // Possible character for the password
 let Specialchar = ['!','@','#','$','%','^','&','*']
 let numbers = [0,1,2,3,4,5,6,7,8,9]
 let upperCasechar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
 let lowerCasechar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// function to randomize password array
function random(arr) {
     var randomNumber = Math.floor(Math.random() * arr.length);
     return arr[randomNumber];
   }

 function generatePassword(){
   var passwordLength = prompt('How long would you like your password?(8 to 128)')

   if (passwordLength < 8 || passwordLength > 128) {
     alert('Error! select number between 8 - 128');
     return null;
   }
   
   // User prompts
   var specialCharacters = confirm('Do you want special charecters?(yes/no)')

   var upperCase = confirm('Do you want upper case letters?(yes/no)')

   var lowerCase = confirm('Do you want lower case letters?(yes/no)')

   var includeNumbers = confirm('Do you want numbers?(yes/no)')

// if conditions
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
 }
 let reset =function(){
  let resetText = document.querySelector("#password");
  resetText.value = ""
  console.log('c;mon')
  return resetText.value; 
}

return finalpassword 

 }
 

 // Get references to the #generate element

 // Write password to the #password input
 
 function writePassword() {
  let passwordText = document.querySelector("#password");
  let password = generatePassword();
  
  passwordText.value = password.join('');

}

// Add event listener to generate button

generateBtn.addEventListener("click",writePassword)
  
  




