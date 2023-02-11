import * as products from "./products.json";

class Product {
  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  id: number;
  name: string;
  price: number;

  static findProductsBelow (below: number) {
    return products.filter((obj) => {
      if (obj.price < below) return obj;
    });
  }
}

class User {
  constructor(name: string) {
    this.name = name;
  }

  name: string;
  products: Product[] = [];

  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }

  addProducts(newProducts: Product[]) {
    // Un arreglo dentro de un arreglo
    // this.products.push(newProducts);
    newProducts.forEach((obj) => {
      this.products.push(obj);
    })
  }
}

// Para usarlo en los test
export { User, Product };
