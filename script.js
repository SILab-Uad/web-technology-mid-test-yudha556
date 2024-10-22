
// TODO: Implement the password generation logic based on user input

function generatePassword(length, options) {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    // TODO: Create a variable for the character set based on selected options
    let charset = "";
    if (options.includeUppercase) charset += uppercase;
    if (options.includeLowercase) charset += lowercase;
    if (options.includeNumbers) charset += numbers;
    if (options.includeSpecialChars) charset += specialChars;
    // TODO: Generate the password based on the selected criteria
    if (charset.length === 0) {
    console.log("Please select at least one criteria.");
    return;
};

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
};


module.exports = generatePassword;


//  TODO: Add event listener to the button to call generatePassword and display the output
// from mahasiswa: buat kode yang ini fungsinya udah ada di DOM.js ka, jadi kami kebingungan buat task yang ini



// BONUS: Implement the copy to clipboard functionality
// terus buat yang ini juga udah ada di DOM.js jadi biar alertnya ga double, aku ganti dari alert ke console.log ka 
