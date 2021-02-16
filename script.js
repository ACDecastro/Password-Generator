// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseCheck = document.querySelector(".lower");
var uppercaseCheck = document.querySelector(".upper");
var digitCheck = document.querySelector(".digits");
var specialCheck = document.querySelector(".specials");
var saveButton = document.querySelector("#saveButton");

//These strings contain all the necessary characters for passwords
var lowercaseLetters = 'qwertyuiopasdfghjklzxcvbnm';
var uppercaseLetters = 'QWERTYUIOPASDFGHJKLZXCVBNM';
var specials = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var digits = "0123456789";
var passwordLength = 0;
// Write password to the #password input
function writePassword() {
//   var symbolSelect;
   var pwLength = prompt("Please enter how many characters long you would like your password to be", "Please enter a number from 8 to 128");
   console.log("pwLength = " + pwLength);
   console.log("value of allnumeric: " + allnumeric(pwLength));
   if (allnumeric(pwLength)==true){
      console.log("all numbers");
      passwordLength = parseInt(pwLength);
   }
   else{
      alert('Please input numeric characters only');
      writePassword();
   }

   //Have the user select at least one symbol type to include
   $('#symbolSelect').modal('show');
}

function allnumeric(inputtxt){ //This function taken from https://www.w3resource.com/javascript/form/all-numbers.php
      var numbers = /^[0-9]+$/;
      if(inputtxt.match(numbers))
      {
      return true;
      }
      else
      {
      return false;
      }
} 

//Finally assemble password with all information and write it to the password field
function generatePassword(){
   var newPassword = "";
   for(var i = 0; i<=passwordLength; i++){
      var type = Math.floor(Math.random()*4);
      var symbolString = "";
      switch(type){
         case 0: 
            symbolString = lowercaseLetters;
            break;
         case 1: 
            symbolString = uppercaseLetters;
            break;
         case 2: 
            symbolString = specials;
            break;
         case 3: 
            symbolString = digits;
            break;
         default:
            console.log("Something weird happened");
            break;
      }
      var symbolChar = symbolString.charAt(Math.floor(Math.random()*(symbolString.length-1)));
      newPassword = newPassword + symbolChar;
   }
   var passwordText = document.querySelector("#password");

   passwordText.value = newPassword;
   console.log(newPassword);
   alert("Your new password is "+newPassword);
}

//When someone clicks a checkbox, that box's value gets multiplied by negative 1 to keep track of checked/unchecked status
function selectLower(){
   document.getElementById("lowercaseCheckbox").value *= -1;
}
function selectUpper(){
   document.getElementById("uppercaseCheckbox").value *= -1;
}
function selectDigits(){
   document.getElementById("digitsCheckbox").value *= -1;
}
function selectSpecials(){
   document.getElementById("specialsCheckbox").value *= -1;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Click listener for checkboxes
lowercaseCheck.addEventListener("click", selectLower);
uppercaseCheck.addEventListener("click", selectUpper);
digitCheck.addEventListener("click", selectDigits);
specialCheck.addEventListener("click", selectSpecials);

saveButton.addEventListener("click", generatePassword);