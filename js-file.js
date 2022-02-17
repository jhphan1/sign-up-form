const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const firstnameError = document.querySelector("#firstname + .error");
const lastname = document.getElementById("lastname");
const lastnameError = document.querySelector("#lastname + .error");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + .error");
const phone = document.getElementById("phone");
const phoneError = document.querySelector("#phone + .error");
const password = document.getElementById("password");
const passwordError = document.querySelector("#password + .error");
const confirm = document.getElementById("confirm");
const confirmError = document.querySelector("#confirm + .error");

firstname.addEventListener("input", () => {
    if (firstname.validity.valid) {
        // Remove any current error message if field is now valid
        firstnameError.textContent = "";
    } else {
        showError(firstname, firstnameError);
    }
});

lastname.addEventListener("input", () => {
    if (lastname.validity.valid) {
        // Remove any current error message if field is now valid
        lastnameError.textContent = "";
    } else {
        showError(lastname, lastnameError);
    }
});

email.addEventListener("input", () => {
    if (email.validity.valid) {
        // Remove any current error message if field is now valid
        emailError.textContent = "";
    } else {
        showError(email, emailError);
    }
});

phone.addEventListener("input", () => {
    if (phone.validity.valid) {
        // Remove any current error message if field is now valid
        phoneError.textContent = "";
    } else {
        showError(phone, phoneError);
    }
});

password.addEventListener("input", () => {
    if (password.validity.valid) {
        // Remove any current error message if field is now valid
        passwordError.textContent = "";
    } else {
        showError(password, passwordError);
    }
});

confirm.addEventListener("input", () => {
    if (confirm.value === password.value && !confirm.validity.valueMissing) {
        // Remove any current error message if field is now valid
        confirmError.textContent = "";
        confirm.setCustomValidity("");
    } else if (confirm.validity.valueMissing) {
        confirmError.textContent = "*Password is required.";
    } else if (confirm.value != password.value) {
        confirmError.textContent = "*Passwords do not match.";
        confirm.setCustomValidity("x");
    }
});

form.addEventListener("submit", (e) => {
    if (!firstname.validity.valid || !lastname.validity.valid || !email.validity.valid || !phone.validity.valid ||
         !password.validity.valid || !confirm.validity.valid) {
        // Prevent form from submitting if any valid is invalid
        e.preventDefault();
    }
});

function showError(input, error) {
    if (input === firstname) {
        if (input.validity.valueMissing) {
            error.textContent = "*First name is required.";
        } else if (input.validity.tooShort) {
            error.textContent = `*First name should be at least ${ input.minLength } characters; you entered ${ input.value.length }.`;
        } 
    }

    if (input === lastname) {
        if (input.validity.valueMissing) {
            error.textContent = "*Last name is required.";
        } else if (input.validity.tooShort) {
            error.textContent = `*Last name should be at least ${ input.minLength } characters; you entered ${ input.value.length }.`;
        } 
    }

    if (input === email) {
        if (input.validity.valueMissing) {
            error.textContent = "*Email is required.";
        } else if (input.validity.typeMismatch) {
            error.textContent = "Enter a valid email address.";
        } 
    }

    if (input === phone) {
        if (input.validity.valueMissing) {
            error.textContent = "*Phone number is required.";
        } else if (input.validity.patternMismatch) {
            error.textContent = "Enter 10 digit phone number. Ex: (123) 456-7890.";
        } 
    }

    if (input === password) {
        if (input.validity.valueMissing) {
            error.textContent = "*Password is required.";
        } else if (input.validity.tooShort) {
            error.textContent = `*Password should be at least ${ input.minLength } characters; you entered ${ input.value.length }.`;
        } else if (input.validity.tooLong) {
            error.textContent = `*Password cannot exceed ${ input.maxLength } characters; you entered ${ input.value.length }.`;
        } 
    }
}