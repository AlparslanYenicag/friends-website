let cart = [];  

function addProduct(name, price) {  
  let product = { name: name, price: price };  
  cart.push(product);  
}  

function removeProduct(name) {  
  cart = cart.filter(product => product.name !== name);  
}  
let userName = prompt("Adınızı girin:");
let userAge = prompt("Yaşınızı girin:");
let userJob = prompt("Mesleğinizi girin:");

let user = {  
  name: userName,  
  age: Number(userAge),  
  job: userJob  
};  

console.log("Kullanıcı Bilgileri:", user);

let productName = prompt("Ürün ismi girin:");
let productPrice = Number(prompt("Ürün fiyatı girin:"));
addProduct(productName, productPrice);
console.log("Güncellenmiş Sepet:", cart);


let totalPrice = cart.reduce((total, product) => total + product.price, 0);
console.log("Toplam Fiyat:", totalPrice);


let removeName = prompt("Silmek istediğiniz ürünün adını girin:");
removeProduct(removeName);
console.log("Son Güncellenmiş Sepet:", cart);