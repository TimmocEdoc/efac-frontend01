import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Category, CategoryDto, Product, ProductDto } from 'src/types/model';
import Swal from 'sweetalert2';
import { CategoryApi } from '../../api/category.api';
import { ProductApi } from '../../api/product.api';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productDto: ProductDto;
  category: Category;
  categories: CategoryDto[];
  product: Product;
  form: FormGroup;
  private routeSub: String;
  selected = 'None';

  constructor(private productApi: ProductApi, private categoryApi: CategoryApi, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      price: ['', [Validators.required]]
    })
    this.routeSub = this.route.snapshot.params.id;
    this.productApi.getProduct(this.routeSub).subscribe(productDto => {
      this.categoryApi.getCategories().subscribe(categoryDtos => {
        console.log(categoryDtos);
        this.categories = categoryDtos;
      })
      if (productDto) {
        this.form.patchValue(productDto);
        this.productDto = productDto;
      }
    })
    
  }

  ngOnDestroy() {
    this.routeSub = null;
  }

  newproduct(): void {
    this.product;
  }

  successNotification(){
    Swal.fire({
      icon: "success",
      title: "Product has been saved.",
      showConfirmButton: false,
      timer: 1000,
      position: "bottom-right"
    })
  }

  submit(): void {
    if (this.form.invalid) {
      return alert("failed");
    }
    let body = this.form.value;
    console.log(this.product);
    console.log(body)
    if(this.product) {
      body = Object.assign({}, body, { id: this.product.id})
      this.productApi.updateProduct(this.selected, body).pipe(tap(() => {
      })).subscribe((response) => {
        console.log(response);
        this.successNotification();
        this.router.navigate(['/product']);
      }, (error) => {
        console.log(error)
      })
    } else {
      this.productApi.saveProduct(this.selected, body)
      .subscribe(
        response => {
          console.log(response);
          this.successNotification();
          this.router.navigate(['/product']);
        },
        error => {
          console.log(error);
        });
    }
  }
}