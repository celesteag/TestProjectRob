function listenForValidation() {
    const REGISTER_FORM = document.getElementById("register-form");
    REGISTER_FORM.addEventListener("submit", validateRegisterForm);
}

function validateRegisterForm(e) {
    const NAME = document.getElementById("name").value.trim();
    const EMAIL = document.getElementById("email").value.trim();

    let valid = true;

    
    if (!NAME) {
        document.getElementById("form-name").style.visibility = "visible";
        valid = false;
    } else document.getElementById("form-name").style.visibility = "hidden";
    
    
    if (!EMAIL) {
        document.getElementById("form-email").style.visibility = "visible";
        valid = false;
    } else document.getElementById("form-email").style.visibility = "hidden";
    
    
    if (!valid) {
        e.preventDefault();
    } else saveData(NAME, EMAIL);

    function saveData(name, email) {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
    }
}

listenForValidation();
