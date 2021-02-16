// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseCheck = document.querySelector(".lower");
var uppercaseCheck = document.querySelector(".upper");
var digitCheck = document.querySelector(".digits");
var specialCheck = document.querySelector(".specials");

//These strings contain all the necessary characters for passwords
var lowercaseLetters = 'qwertyuiopasdfghjklzxcvbnm';
var uppercaseLetters = 'QWERTYUIOPASDFGHJKLZXCVBNM';
var specials = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var digits = "0123456789";

// Write password to the #password input
function writePassword() {
//   var symbolSelect;
   var pwLength = prompt("Please enter how many characters long you would like your password to be", "Please enter a number from 8 to 128");
   console.log("pwLength = " + pwLength);
   console.log("value of allnumeric: " + allnumeric(pwLength));
   if (allnumeric(pwLength)==true){
      console.log("all numbers");
   }
   else{
      alert('Please input numeric characters only');
      writePassword();
   }

   //Have the user select at least one symbol type to include
   $('#symbolSelect').modal('show');

//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
//   console.log(password);
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

//Finally assemble password with all information
function generatePassword(){

}

//When someone clicks a checkbox, that box' value gets multiplied by negative 1 to keep track of checked/unchecked status
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
