// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
//   var symbolSelect;
//   var pwLength = prompt("Please enter how many characters long you would like your password to be", "Please enter a number from 8 to 128");
//   if (allnumeric(pwLength)){

//   }

//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
//   console.log(password);
$('#exampleModal').modal('show');

}

function allnumeric(inputtxt) //This function taken from https://www.w3resource.com/javascript/form/all-numbers.php
   {
      var numbers = /^[0-9]+$/;
      if(inputtxt.value.match(numbers))
      {
      //alert('Your Registration number has accepted....');
      //document.form1.text1.focus();
      return true;
      }
      else
      {
      //alert('Please input numeric characters only');
      //document.form1.text1.focus();
      return false;
      }
   } 

function generatePassword(){

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
