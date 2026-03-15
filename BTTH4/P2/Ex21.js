const form = document.getElementById("registerForm");

const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");
const agree = document.getElementById("agree");

function showError(id,message){
document.getElementById(id).textContent = message;
}

function clearError(id){
document.getElementById(id).textContent = "";
}

function validateFullname(){

let value = fullname.value.trim();

if(value.length < 3){
showError("fullnameError","Ít nhất 3 ký tự");
return false;
}

clearError("fullnameError");
return true;
}

function validateEmail(){

let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!pattern.test(email.value)){
showError("emailError","Email không hợp lệ");
return false;
}

clearError("emailError");
return true;
}

function validatePhone(){

let pattern = /^0\d{9}$/;

if(!pattern.test(phone.value)){
showError("phoneError","SĐT phải 10 số");
return false;
}

clearError("phoneError");
return true;
}

function validatePassword(){

if(password.value.length < 8){
showError("passwordError","Mật khẩu ít nhất 8 ký tự");
return false;
}

clearError("passwordError");
return true;
}

function validateConfirm(){

if(confirm.value !== password.value){
showError("confirmError","Mật khẩu không khớp");
return false;
}

clearError("confirmError");
return true;
}

function validateGender(){

let checked = document.querySelector('input[name="gender"]:checked');

if(!checked){
showError("genderError","Chọn giới tính");
return false;
}

clearError("genderError");
return true;
}

function validateAgree(){

if(!agree.checked){
showError("agreeError","Phải đồng ý điều khoản");
return false;
}

clearError("agreeError");
return true;
}

form.addEventListener("submit",function(e){

e.preventDefault();

let valid =
validateFullname() &
validateEmail() &
validatePhone() &
validatePassword() &
validateConfirm() &
validateGender() &
validateAgree();

if(valid){
alert("Đăng ký thành công");
form.reset();
}

});

fullname.addEventListener("blur",validateFullname);
email.addEventListener("blur",validateEmail);
phone.addEventListener("blur",validatePhone);
password.addEventListener("blur",validatePassword);
confirm.addEventListener("blur",validateConfirm);