//initialize arrays with numbers, special characters, letters
var numbers = "0123456789";
var specialCharacters = "@#$%&()*+<?^";
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var string = " ";
var pass = "";
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  //Input lenght  of the pass between 8 -128 characters
  var passwordLenght = prompt("Enter the length of the password, a number betweern 8 and 128 characters.");
     //check the lenght is in the range 8-128
    if(passwordLenght >= 8 && passwordLenght <= 128){
       //Confirm whether it should include special characters
       if(window.confirm("Click ok to include special charaters")){
         string = string.concat(specialCharacters);
         //alert("STRING "+string);
       }
        //Confirm whether it should include numbers
       if(window.confirm("Click ok to include numbers")){
        string = string.concat(numbers);
        //alert("STRING "+string);
      }
       //Confirm whether it should include upperCase characters
      if(window.confirm("Click ok to include upercase characters")){
        string = string.concat(alphabet);
        //alert("STRING "+string);
      }
       //Confirm whether it should include lower case characters
      if(window.confirm("Click ok to include lowercase characters")){
        string = string.concat(alphabet.toLocaleLowerCase());
        //alert("STRING "+string);
      }
      /*get ramdom characteres from the string to generate the new pass
      with  the specified lenght */
      /** math floor; will generate a number between 0 and theleng of the string.
       * charAt method will keep concatenating  the ramdom characters
      */
      for(var i=0; i<= passwordLenght; i++){
        var character = Math.floor(Math.random()*string.length);
        pass = pass+string.charAt(character);
      }
      alert('New pass: '+pass);
      return pass;
  }
  else{
    alert("must be a range 8 - 128 try again")
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
