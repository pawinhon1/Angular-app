import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient : HttpClient) { }

  // url = 'http://18.136.194.253:8080/products'
  url = 'http://localhost:8080/products'

  getAllProducts() {
    return this.httpClient.get(`${this.url}/`)
  }

  addProduct(productName, category, price) {
    const data = {
      productName : productName,
      category : category,
      price : price
    }

    this.httpClient.post(`${this.url}/add`, data).subscribe(
      res => alert("Add data complete!!")
    )
  }

  deleteProduct(id) {

  }

  loadDetailProduct(id) {

  }

  updateProduct(id, productName, category, price) {

  }
}
