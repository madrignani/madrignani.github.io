function strengthChecker(password) {
    let strenghPass = document.getElementById("strength");
    let charCount = document.getElementById("charCount");
    let showPassword = document.getElementById("showPassword");
    let passwordInput = document.getElementById("code");

    let mediumPassword = new RegExp("((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{3,}))|((?=.*[a-z])(?=.*[A-Z])(?=.{3,}))");
    let strongPassword = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{4,})");

    if (password.length < 8) {
        strenghPass.style.backgroundColor = "red";
        strenghPass.textContent = "A senha deve ter pelo menos 8 caracteres";
        charCount.textContent = `Número de caracteres: ${password.length}`;
        return;
    }

    if (strongPassword.test(password)) {
        strenghPass.style.backgroundColor = "green";
        strenghPass.textContent = "SENHA FORTE";
    } else if (mediumPassword.test(password)) {
        strenghPass.style.backgroundColor = "orange";
        strenghPass.textContent = "SENHA MODERADA";
    } else {
        strenghPass.style.backgroundColor = "red";
        strenghPass.textContent = "SENHA FRACA";
    }

    charCount.textContent = `Número de caracteres: ${password.length}`;

    if (showPassword.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

function main() {
    let passwordInput = document.getElementById("code");

    passwordInput.addEventListener("input", function () {
        let password = passwordInput.value;
        strengthChecker(password);
    });

    let showPassword = document.getElementById("showPassword");
    showPassword.addEventListener("change", function () {
        let password = passwordInput.value;
        strengthChecker(password);
    });

    document.getElementById('passwordForm').addEventListener('submit', function (e) {
        e.preventDefault();
        let password = passwordInput.value;
        strengthChecker(password);
    });
}

main();