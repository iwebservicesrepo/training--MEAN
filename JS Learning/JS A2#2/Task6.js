//6.1
let product1 = {
  code: "PX101",
  stock: 15,
  price: 30,
};
let product2 = {
  code: "PX102",
  stock: 24,
  price: 20,
};
let product3 = {
  code: "PX103",
  stock: 33,
  price: 10,
};
let productArr = [product1, product2, product3];
console.log(productArr);
//6.2
let shop = {
  products: productArr,
};
console.log(shop);
//6.3
function totalStock(shopJSON) {
  let productArr = shopJSON.products;
  let total = 0;
  for (let i = 0; i < productArr.length; i++) {
    let prod = productArr[i];
    total += prod.stock;
  }
  return total;
}
let totalStockQty = totalStock(shop);
console.log("Total stock is:", totalStockQty);
shop["Total Stock"] = totalStockQty;
console.log(shop);
//6.4
let product4 = {
  code: "PX104",
  stock: 10,
  price: 40,
};
shop.products.push(product4);
totalStockQty = totalStock(shop);
console.log("Updated Stock is: ", totalStockQty);
