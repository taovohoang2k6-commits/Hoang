 getFirstLast=(array)=> {
  const [first, , ,last ] = array;
  return [first, last];
}
console.log(getFirstLast([1, 2, 3, 4]));
 swapElements=(arr)=> {
  [arr[1],arr[3]]=[arr[3],arr[1]]
  return arr
}

console.log(swapElements([1, 2, 3, 4, 5])); // [1, 4, 3, 2, 5]

const user = {
  id: 1,
  personalInfo: {
    name: "javascript",
    contact: {
      email: "javascript@email.com",
      phone: "123-456-7890",
    },
  },
};

 getUserInfo=(user)=> {
  const {
    personalInfo: {
      name,
      contact: { email },
    },
  } = user;

  return { name, email };
}

console.log(getUserInfo(user));
// { name: 'javascript', email: 'javascript@email.com' }
 createProduct=(productInfo) =>{
  const { name, price, category = "general", inStock = true } = productInfo;
  return { name, price, category, inStock };
}

const product = createProduct({ name: "Laptop", price: 999 });
console.log(product);
// { name: 'Laptop', price: 999, category: 'general', inStock: true }
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

delay(2000).then(() => console.log("2 seconds passed"));
async function fetchMultipleData(urls) {
  const responses = await Promise.all(urls.map(url => fetch(url)));
  
  const data = await Promise.all(responses.map(res => res.json()));
  
  return data;
}

fetchMultipleData(["/api/user/1", "/api/user/2"])
  .then(users => console.log(users))
  .catch(err => console.error("Lỗi:", err));

  async function safeApiCall(apiFunction, ...args) {
  try {
    const result = await apiFunction(...args);
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: error.message || error };
  }
}