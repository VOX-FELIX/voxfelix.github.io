<!-- script.js -->
const users = JSON.parse(localStorage.getItem("users")) || {};

function togglePasswordVisibility() {
    const passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}

function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (users[email] && users[email] === password) {
        localStorage.setItem("loggedInUser", email);
        window.location.href = "developer.html";
    } else {
        document.getElementById("message").innerText = "❌ Incorrect email or password.";
    }
}

function resetPassword() {
    const email = prompt("Enter your registered email:");
    if (users[email]) {
        const newPassword = prompt("Enter new password:");
        if (newPassword) {
            users[email] = newPassword;
            localStorage.setItem("users", JSON.stringify(users));
            alert("Password successfully updated! You can now log in with your new password.");
        }
    } else {
        alert("Email not found in system.");
    }
}

window.onload = function () {
    const userEmail = localStorage.getItem("loggedInUser");
    if (userEmail && document.getElementById("userEmail")) {
        document.getElementById("userEmail").innerText = userEmail;
    }

    if (!userEmail && window.location.pathname.includes("developer.html")) {
        window.location.href = "login.html";
    }
};

function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}
