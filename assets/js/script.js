// selecting element with an id of generate
var generateBtn = document.querySelector("#generate");

// generatePassword is to generate new random password that takes in 4 input args:
// length is a number type argument that is the length of password
// lower, upper, number, special are all boolean data arg. True if the user confirm to include the character type lowercase, uppercase, numeric, and special character, respectively
function generatePassword(length,lower,upper,number,special){
  console.log('init generatePassword')
  // declare the character ser, numeric ser, and special chacater set to generate the password
  var charset = "abcdefghijklmnopqrstuvwxyz"; 
  var numberset = "0123456789";
  var specialset = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  // declare the variable password as the final generated password
  var password = "";
  // declare the variable character as the placeholder as the password is being generated
  var character = "";
  // This while loop is run until the length of the password generated is no longer less than the length specified by the user
  while (password.length<length){
    // add random lowercase character is the user confirmed to include lowercase characters
    if (lower){
      lowercase = charset[Math.floor(Math.random()*charset.length)];
      character += lowercase;
    }
    // add random uppercase character is the user confirmed to include uppercase characters
    if (upper){
      uppercase = charset[Math.floor(Math.random()*charset.length)].toUpperCase();
      character += uppercase;
    }
    // add random numeric character is the user confirmed to include numeric characters
    if (number){
      numeric = numberset[Math.floor(Math.random()*numberset.length)];
      character += numeric;
    }
    // add random special character is the user confirmed to include special characters
    if (special){
      specialchar = specialset[Math.floor(Math.random()*specialset.length)];
      character += specialchar;
    }
    password = character;
  }
  // randomizing the generated password
  password=password.split('').sort(function(){
    return 0.5-Math.random()
  }).join('');
  return password;
}

// Write password to the #password input
// writePassword() is run when the generateBtn event listener is kicked off; it prompts and asks the user to specify 
// the length of the password, the character type to include, and ensures that the user meets the requirements. 
// Finally, when all requirements (password length at least 8 characters and no more than 128 characters, and must select at least one character type) are met,
// writePassword() calls generatePassword() to generate a new random password and display the generated password in the web application. 
function writePassword() {
  
  // prompting user to specify password length
  var lengthCriteria = prompt("Please choose the length of password\n (Must be at least 8 characters and no more than 128 characters)", "8");

  // ensure the length specified is not empty or less than 8 or more than 128 chars. If not, it alerts and prompts the user to specify another length
  if (lengthCriteria === null || lengthCriteria < 8 || lengthCriteria > 128){
    console.log("Password length selected does not meet the requirement")
    alert("You must choose at least 8 characters and no more than 128 characters"); 
    writePassword()
  }
  console.log("Length chosen is " + lengthCriteria)
  // prompting user to confirm whether to include at least one number
  var numCriteria = confirm("Do you want to include at least one number?");
  // prompting user to confirm whether to include at least one lowercase char
  var lowerCriteria = confirm("Do you want to include at least one lowercase?");
  // prompting user to confirm whether to include at least one uppercase char
  var upperCriteria = confirm("Do you want to include at least one uppercase?");
  // prompting user to confirm whether to include at least one special char
  var specialCriteria = confirm("Do you want to include at least one special character (e.g., ! @ # ? ]) ?");

  // ensure the user must select at least one character type. If not, it alerts and stop the fx
  if (numCriteria === false && lowerCriteria === false && upperCriteria === false && specialCriteria === false){
    alert("Your must select at least one character type"); 
    return;
  } else if (lengthCriteria !== null && (numCriteria === true || lowerCriteria === true || upperCriteria === true || specialCriteria === true)){
    console.log('Meeting character selection criteria')
    var password = generatePassword(lengthCriteria,lowerCriteria,upperCriteria,numCriteria,specialCriteria);
    // select the element with id password
    var passwordText = document.querySelector("#password");
    // add the generated factor in the #password element
    passwordText.value = password;
    // set the font size of the password to 30px
    passwordText.setAttribute("style","font-size:30px")
  }
}

// Event listener to generate button. When the "Generate Button" is clicked, the event listener kickoffs the writePassword fx above
generateBtn.addEventListener("click", writePassword, false);





