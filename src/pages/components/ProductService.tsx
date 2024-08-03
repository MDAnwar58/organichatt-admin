// service/ProductService.js
export class ProductService {
  getProductsMini() {
    return fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => data.products);
  }
}
