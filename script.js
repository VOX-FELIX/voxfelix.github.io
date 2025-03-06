console.log("🔥 script.js is loading!");

function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    console.log("🛠️ Login Attempt: ", email, password); // Debugging Line

    // Retrieve stored users
    let users = JSON.parse(localStorage.getItem("registeredUsers")) || {};
    console.log("📂 Stored Users: ", users); // Debugging Line

    if (users[email]) {
        console.log("✅ User found in storage. Checking password...");
        if (users[email] === password) {
            console.log("✅ Password correct! Logging in...");
            localStorage.setItem("loggedInUser", email); // Store session
            window.location.href = "developer.html"; // Redirect to Developer Page
        } else {
            console.log("❌ Incorrect password.");
            document.getElementById("message").innerText = "❌ Incorrect password.";
        }
    } else {
        console.log("❌ User not found in storage.");
        document.getElementById("message").innerText = "❌ Email not registered.";
    }
}
