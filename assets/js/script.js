// Assignment Code
var generateBtn = document.querySelector("#generate");

//  function that takes in 4 input args to generate password
function generatePassword(length,lower,upper,number,special){
  console.log('init generatePassword')
  var charset = "abcdefghijklmnopqrstuvwxyz"; 
  var numberset = "0123456789";
  var specialset = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  var password = "";
  var character = "";
  while (password.length<length){
    console.log('while loop')
    if (lower){
      lowercase = charset[Math.floor(Math.random()*charset.length)];
      character += lowercase;
    }
    if (upper){
      uppercase = charset[Math.floor(Math.random()*charset.length)].toUpperCase();
      character += uppercase;
    }
    if (number){
      numeric = numberset[Math.floor(Math.random()*numberset.length)];
      character += numeric;
    }
    if (special){
      specialchar = specialset[Math.floor(Math.random()*specialset.length)];
      character += specialchar;
    }
    password = character;
    console.log('password = character')
  }
  password=password.split('').sort(function(){
    return 0.5-Math.random()
  }).join('');
  return password;
}

// Write password to the #password input
function writePassword() {
  
  var lengthCriteria = prompt("Please choose the length of password\n (Must be at least 8 characters and no more than 128 characters)", "8");
  if (lengthCriteria === null){
    alert("Your must choose at least 8 characters and no more than 128 characters"); 
    writePassword()
  }
  var numCriteria = confirm("Do you want to include at least one number?");
  var lowerCriteria = confirm("Do you want to include at least one lowercase?");
  var upperCriteria = confirm("Do you want to include at least one uppercase?");
  var specialCriteria = confirm("Do you want to include at least one special character (e.g., ! @ # ? ]) ?");
  if (numCriteria === false && lowerCriteria === false && upperCriteria === false && specialCriteria === false){
    alert("Your must select at least one character type"); 
    writePassword()
  } else if (lengthCriteria !== null && (numCriteria === true || lowerCriteria === true || upperCriteria === true || specialCriteria === true)){
    console.log('elseif')
    var password = generatePassword(lengthCriteria,lowerCriteria,upperCriteria,numCriteria,specialCriteria);
    console.log(password)
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    passwordText.setAttribute("style","font-size:50px; padding-top:50px; padding-bottom:40px")
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword, false);





