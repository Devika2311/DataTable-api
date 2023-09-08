document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Add your authentication logic here (e.g., check username and password)

        // For demo purposes, you can use a simple check
        if (username === "admin" && password === "password") {
            // Successful login, redirect to the dashboard
            window.location.href = "dashboard.php";
        } else {
            alert("Invalid username or password");
        }
    });
});
