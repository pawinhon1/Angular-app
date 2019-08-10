import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[];

  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe((res:Product[]) => { 
      this.products = res;
      console.log(this.products); 
    }) 
  }

  deleteProduct(id) {
  }
}
