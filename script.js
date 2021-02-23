// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseCheck = document.querySelector("#lowercaseCheckbox");
var uppercaseCheck = document.querySelector("#uppercaseCheckbox");
var digitCheck = document.querySelector("#digitsCheckbox");
var specialCheck = document.querySelector("#specialsCheckbox");
var saveButton = document.querySelector("#saveButton");

//These strings contain all the necessary characters for passwords
var lowercaseLetters = 'qwertyuiopasdfghjklzxcvbnm';
var uppercaseLetters = 'QWERTYUIOPASDFGHJKLZXCVBNM';
var specials = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var digits = "0123456789";

var passwordLength = 0;

// Write password to the #password input
function writePassword() {
   var pwLength = prompt("Please enter how many characters long you would like your password to be", "Please enter a number from 8 to 128");
   console.log("pwLength = " + pwLength);
   console.log("value of allnumeric: " + allnumeric(pwLength));
   if (allnumeric(pwLength)==true){
      console.log("all numbers");
      passwordLength = parseInt(pwLength);
      if(passwordLength<8 || passwordLength>128){
         alert("Please enter a number between 8 and 128");
         writePassword();
      }
   }
   else{
      alert('Please input numeric characters only');
      writePassword();
   }

   //Have the user select at least one symbol type to include then click save to activate formControl and generate the password.
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

function randomCharSelect(){
   var type = Math.floor(Math.random()*4);
    //This switch statement takes a randomly generated number from 0-3 and selects which type of character should be added to the password string based on that number. 
    //If that character type did not have a value of -1 (not selected by the user), it will run again.
    switch(type){
      case 0: 
         if(document.getElementById("lowercaseCheckbox").value==-1){
            return lowercaseLetters;
         }
         else{
            randomCharSelect();
         }
         break;
      case 1: 
         if(document.getElementById("uppercaseCheckbox").value==-1){
            return uppercaseLetters;
         }
         else{
            randomCharSelect();
         }
         break;
      case 2: 
         if(document.getElementById("specialsCheckbox").value==-1){
            return specials;
         }
         else{
            randomCharSelect();
         }
         break;
      case 3: 
         if(document.getElementById("digitsCheckbox").value==-1){
            return digits;
         }
         else{
            randomCharSelect();
         }
         break;
      default:
         console.log("something weird happened");
         break;
   }
}

//Makes sure the user actually selected one of the checkboxes.
function formControl(){
   if((document.getElementById("lowercaseCheckbox").value == 1)&&(document.getElementById("uppercaseCheckbox").value == 1)&&(document.getElementById("digitsCheckbox").value == 1)&&(document.getElementById("specialsCheckbox").value == 1)){
      alert("At least one checkbox must be selected");
      $('#symbolSelect').modal('show');
   }
   else{
      generatePassword();
   }
}

//Finally assemble password with all information and write it to the password field
function generatePassword(){
   var newPassword = "";
   for(var i = 0; i<passwordLength; i++){
      var symbolString = ""+randomCharSelect();
      //Selects a random character from the chosen "symbolString" type of character
      var symbolChar = symbolString[(Math.floor(Math.random()*(symbolString.length-1)))];
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
   console.log("lower selected");
}
function selectUpper(){
   document.getElementById("uppercaseCheckbox").value *= -1;
   console.log("Upper selected");
}
function selectDigits(){
   document.getElementById("digitsCheckbox").value *= -1;
   console.log("digits selected");
}
function selectSpecials(){
   document.getElementById("specialsCheckbox").value *= -1;
   console.log("specials selected");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Click listener for checkboxes
lowercaseCheck.addEventListener("click", selectLower);
uppercaseCheck.addEventListener("click", selectUpper);
digitCheck.addEventListener("click", selectDigits);
specialCheck.addEventListener("click", selectSpecials);

//Click listener for the save button on the character type selector modal.
saveButton.addEventListener("click", formControl);

//Click listener for the close button on the character type selector modal. Returns the passwordLength to 0.
closeButton.addEventListener("click", ()=>{passwordLength = 0;} );