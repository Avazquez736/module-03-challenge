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

  

  