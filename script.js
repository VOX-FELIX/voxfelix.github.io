<!-- script.js -->
const approvedUsers = [
    "seankerr@novawerke.ai", "dkerr14@jh.edu", "qiuhaoalex@gmail.com",
    "csnelli1@jh.edu", "ctighe4@jh.edu", "ltesta1@jh.edu",
    "lmirele2@jh.edu", "michelevanzaldua@gmail.com", "snellingstephen91@gmail.com",
    "nburton8@jh.edu", "rchin7@jh.edu", "sstein28@jh.edu",
    "mtorre44@jh.edu", "mattwalter35@gmail.com"
];

function login() {
    const email = document.getElementById("email").value.trim();
    if (approvedUsers.includes(email)) {
        localStorage.setItem("loggedInUser", email);
        window.location.href = "developer.html";
    } else {
        document.getElementById("message").innerText = "❌ Access Denied. Email not recognized.";
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
