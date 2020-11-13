import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services.service';
import { Category, CategoryDto } from 'src/types/model';
import { CategoryApi } from '../api/category.api';
import { tap } from 'rxjs/operators'
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: CategoryDto[]
  category: CategoryDto
  
  constructor(private categoryApi: CategoryApi, private route: ActivatedRoute,
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
      title: "Category has been deleted.",
      showConfirmButton: false,
      timer: 1000,
      position: "bottom-right"
    })
  }

  fetch() {
    this.categoryApi.getCategories().subscribe(categoryDtos => {
      console.log(categoryDtos);
      this.categories = categoryDtos;
    })
  }

  delete(id): void {
    this.categoryApi.deleteCategory(id)
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
