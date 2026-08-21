const passwordInput = document.getElementById("password");
const toggleBtn = document.getElementById("toggleBtn");
const eyeIcon = document.getElementById("eyeIcon");

toggleBtn.addEventListener("click", function () {

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.src = "images/view-icon.png";
        eyeIcon.alt = "hide paasword"
    
    } else {
        passwordInput.type = "password";
        eyeIcon.src = "images/hide-icon.png";
        eyeIcon.alt = "Show password";
    }

});
