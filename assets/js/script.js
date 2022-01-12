// Assignment Code

var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var charSets = {
    integer: "0123456789",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    special: "~!@#$%^&*()_+{}|:\"<>?`-=[]\\;',./ ", // use backslash \ to escape the tricky characters
};

// generator
function generatePassword() {
    var password = ''
    var currentString = ''
    var passwordLength = window.prompt(
        "Password Length must be 8 to 60");

    if (isNaN(passwordLength) || 8 > passwordLength || passwordLength > 60) {        return "";
    }

    
    var passwordChars = "";

    if (
        window.confirm(
            "Include NUMBERS in the password?\n\nexample: " + charSets.integer
        )
    ) {
        passwordChars += charSets.integer;
    }
    if (
        window.confirm(
            "Include LOWERCASE letters in the password?\n\nexample: " +
                charSets.lowercase
        )
    ) {
        passwordChars += charSets.lowercase;
    }
    if (
        window.confirm(
            "Include UPPERCASE letters in the password?\n\nexample: " +
                charSets.uppercase
        )
    ) {
        passwordChars += charSets.uppercase;
    }
    if (
        window.confirm(
            "Include SPECIAL characters in the password?\n\nexample: " +
                charSets.special
        )
    ) {
        passwordChars += charSets.special;
    }

   
    if (passwordChars == "") {
        window.alert(
            "You haven't selected any of the options. Please try again."
        );
        return "";
    }
    

    // if we made it this far,
    // the user should have entered a valid password length and selected at least one of the character sets

    // start building the output, one character at a time until it reaches the desired length
    var passwordOutput = "";
    while (passwordOutput.length < passwordLength) {
        // randomly select an index in the passwordChars
        var randomIndex = Math.floor(Math.random() * passwordChars.length);
        // then concat that to the output string
        passwordOutput += passwordChars[randomIndex];
    }
    return passwordOutput;
}



// Write password to the #password input
function writePassword() {
    window.alert("Welcome to the Password Generator");
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);