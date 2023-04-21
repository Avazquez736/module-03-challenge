var generateBtn = document.querySelector("#generate");

 let finalpassword = []
 let possibleCharacters=[]
 let Specialchar = ['!','@','#','$','%','^','&','*']
 let numbers = [0,1,2,3,4,5,6,7,8,9]
 let upperCasechar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
 let lowerCasechar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

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
 generateBtn.addEventListener("click", function(){
  document.querySelector(".card-body").placeholder="Your Secure Password"
});
  
 return finalpassword

 }
 
 generateBtn.addEventListener("click", function(){
  document.querySelector(".card-body").placeholder="Your Secure Password"})
 // Get references to the #generate element
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password.join('');

}
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", function(){
  document.querySelector(".card-body").innerHTML.placeholder="Your Secure Password"})
