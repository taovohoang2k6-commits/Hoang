// Sửa đoạn code sau để hoạt động đúng
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Hiện tại in ra 3,3,3
  }, 100);
}
// Yêu cầu: Sửa để in ra 0,1,2

// Tạo một object student với const
// Thêm thuộc tính điểm và in ra
const student = {
  name: "ThuyTien",
  age: 20,
  diem:10,
};
student.grade = "A"
student.age = 21,
console.log(student)
// Thực hiện các thao tác sau:
// 1. Thêm thuộc tính grade với giá trị "A"
// 2. Thay đổi tuổi thành 21
// 3. In ra toàn bộ thông tin student
// Tạo template cho email thông báo
const user = {
  firstName: "Nguyen",
  lastName: "Van A",
  product: "Laptop Dell XPS",
  price: 25000000,
  orderDate: "2024-01-15",
};

// Tạo template string cho email
const emailTemplate = `
Xin chào ${user.firstName} ${user.lastName}
Sản phẩm ${user.product}
Giá ${user.price}
Date ${user.orderDate}
`; // Viết template ở đây

console.log(emailTemplate);
// Viết lại object sau sử dụng ES6 enhanced object literals
const width = 100;
const height = 200;
const color = "red";

const rectangle = {
  width,
 height,
  color: color,
  calculateArea() {
    return this.width * this.height;
  },
  describe() {
    return `Rectangle ${this.width}x${this.height}, color: ${this.color}`;
  },
};
// Tạo object configuration với computed property names
const env = "production";
const version = "v2";
const features = ["auth", "payment", "notification"];

// Tạo object config với:
// - key: `api_${env}_${version}`
// - key cho từng feature: `feature_${featureName}`
// - method: `get${env}Config()`

const config = {
  // Viết code ở đây
};