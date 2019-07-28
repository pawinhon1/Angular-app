import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {

  productForm: FormGroup;

  constructor(private productService: ProductService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required]
    })
  }

  clickSave(productName, category, price) {
    this.productService.addProduct(productName, category, price)
  }

}
