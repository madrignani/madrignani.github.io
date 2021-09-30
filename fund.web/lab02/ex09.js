function strengthChecker(PasswordParameter){
    if(strongPassword.test(PasswordParameter)){
        strenghPass.style.backgroundColor = "green";
        strenghPass.textContent = "SENHA FORTE";
    }
    else
    if(mediumPassword.test(PasswordParameter)){
        strenghPass.style.backgroundColor = "orange";
        strenghPass.textContent = "SENHA MODERADA";
    }
    else{
        strenghPass.style.backgroundColor = "red";
        strenghPass.textContent = "SENHA FRACA";
    }
}

let timeout, password, strenghPass, mediumPassword, strongPassword;
password = document.getElementById("code");
strenghPass = document.getElementById("strength");
mediumPassword = new RegExp("((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{3,}))|((?=.*[a-z])(?=.*[A-Z])(?=.{3,}))");
strongPassword = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{4,})");

password.addEventListener("input", function(){
    clearTimeout(timeout);
    timeout = setTimeout(function(){ 
    strengthChecker(password.value), 30});
});