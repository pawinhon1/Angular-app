import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  productForm: FormGroup;
  product: any

  constructor(private actRoute: ActivatedRoute, private fb: FormBuilder) {
    this.createForm()
  }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {

    })
  }

  createForm() {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required]
    })
  }

  clickUpdate(productName, category, price) {
    this.actRoute.params.subscribe(params => {

    })
  }

}
