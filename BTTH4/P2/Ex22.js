let form = document.getElementById("orderForm");

let product = document.getElementById("product");
let quantity = document.getElementById("quantity");
let address = document.getElementById("address");

let total = document.getElementById("total");
let message = document.getElementById("message");

let prices = {
ao:150000,
quan:200000
};

function calcTotal(){

let p = product.value;
let q = quantity.value;

if(prices[p] && q){
total.textContent = prices[p]*q;
}

}

product.addEventListener("change",calcTotal);
quantity.addEventListener("input",calcTotal);

form.addEventListener("submit",function(e){

e.preventDefault();

if(product.value==""){
alert("Chọn sản phẩm");
return;
}

if(quantity.value<1 || quantity.value>99){
alert("Số lượng 1-99");
return;
}

if(address.value.trim().length<10){
alert("Địa chỉ ít nhất 10 ký tự");
return;
}

let pay = document.querySelector('input[name="pay"]:checked');

if(!pay){
alert("Chọn phương thức thanh toán");
return;
}

message.textContent="Đặt hàng thành công";

});