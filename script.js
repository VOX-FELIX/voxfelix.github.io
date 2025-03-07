<!-- script.js -->
function togglePasswordVisibility() {
    const passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

function resetPassword() {
    const email = prompt("Enter your registered email:");
    if (email) {
        alert("A password reset link has been sent to " + email + " (this is a placeholder, real implementation required)");
    }
}