import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, ProductDto } from 'src/types/model';
import Swal from 'sweetalert2';
import { ProductApi } from '../api/product.api';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: ProductDto[]
  product: ProductDto
  
  constructor(private productApi: ProductApi, private route: ActivatedRoute,
    private router: Router) {   }

  ngOnInit(): void {
    this.fetch()
  }

  refreshList(): void {
    this.fetch();
  }

  successDeleteNotification(){
    Swal.fire({
      icon: "success",
      title: "Product has been deleted.",
      showConfirmButton: false,
      timer: 1000,
      position: "bottom-right"
    })
  }

  fetch() {
    this.productApi.getProducts().subscribe(products => {
      this.products = products
      console.log(products);
    })
  }

  delete(id): void {
    this.productApi.deleteProduct(id)
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
          this.successDeleteNotification();
        },
        error => {
          console.log(error);
        });
  }
}
