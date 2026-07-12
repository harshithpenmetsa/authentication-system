console.log("Login JS Connected");

const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function (event) {

    // Stop the form from submitting
    event.preventDefault();

    const userEmail = email.value;
    const userPassword = password.value;

    if (userEmail === "" || userPassword === "") {
        alert("Please fill all fields");
        return;
    }

    const correctEmail = "admin@gmail.com";
    const correctPassword = "123456";

    if (userEmail === correctEmail && userPassword === correctPassword) {
        alert("Login Successful");
    } else {
        alert("Invalid Email or Password");
    }
});