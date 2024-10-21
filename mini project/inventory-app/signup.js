document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // AJAX to send signup data
    fetch("signup.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password,
        }),
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.success) {
            window.location.href = "login.html";
        } else {
            alert(data.message);
        }
    });
});
