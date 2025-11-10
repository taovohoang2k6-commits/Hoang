// Function 1
function multiply(a, b) {
  return a * b;
}
const multiplyArrow = (a,b)=> a*b;
   

// Function 2
function isPositive(number) {
  return number >= 0;
}
const isPositiveArrow = number =>number>0;

// Function 3
function getRandomNumber() {
  return Math.random();
}
const getRandomNumberArrow = ()=> Math.random()
// Function 4

// Thu thập tất cả tham số
 sumAll = (...numbers) =>{
  return numbers.reduce((total, num) => total + num, 0);
}
console.log (sumAll(1,1,3));

// Kết hợp với tham số thông thường
function introduce(name, age, ...hobbies) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Hobbies: ${hobbies.join(", ")}`);
}
introduce("Hoàng" , 19 , "ăn" , "chơi" , "ngủ" , "nghỉ", "lập trình");


 createUser=(name ="Anonymous" , age = 18, isAdmin =false)=> {
  return {
name,
age,
isAdmin,
  };
}
  console.log(createUser());
  console.log(createUser("haha",25, true))
  
function shoppingCart(customerName, ...products) {
  return {
    customer: customerName,
    items: products,
    totalItems: products.length
  };
}
const cart = shoppingCart("Hoàng", "Laptop", "Chuột", "Bàn phím");
console.log(cart);

