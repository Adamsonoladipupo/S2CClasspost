const showPassword = document.querySelector
("#show-password");
const passwordField = Document.querySelector
("#password");


showPassword.addEventListener("click", function(){
    this.classList.toggle("fa-eye-slash");
})