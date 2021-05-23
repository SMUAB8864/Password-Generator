// Assignment Code
var generateBtn = document.querySelector("#generate");
var 



// Write password to the #password input
function writePassword() {
  var password = "";
  var passwordText = document.querySelector("#password");
  var el_down = document.getElementById("geeks");
  var string = "abcdefghijklmnopqrstuvwxyz"; 
  var numeric = '0123456789';
  var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';


  function gfg_Run() {
    el_down.innerHTML =
      Math.random().toString(36).slice(2)  +
      Math.random().toString(36)
        .toUpperCase().slice(2);
  }
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
