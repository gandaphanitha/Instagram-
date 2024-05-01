

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const specialChars = ["!", "@", "#", "$", "%", '^', "&", "*"];

    let containsSpecialChar = false;
    for (const char of specialChars) {
        if (password.includes(char)) {
            containsSpecialChar = true;
            break;
        }
    }

    if (password.length < 8 || !containsSpecialChar) {
        console.log(" at least 8 characters  and at least one special character.");
        return;
    } else {
        console.log("Username: " + username);
        console.log("Password: " + password);
    }
}