import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product, ProductDto } from 'src/types/model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productDto: ProductDto;
  product: Product;
  form: FormGroup;
  private routeSub: String;

  constructor() { }

  ngOnInit(): void {
  }

}