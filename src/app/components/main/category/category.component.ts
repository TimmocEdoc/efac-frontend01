import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services.service';
import { Category } from 'src/types/model';
import { CategoryApi } from '../api/category.api';
import { tap } from 'rxjs/operators'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[]
  category: Category
  
  constructor(private categoryApi: CategoryApi, private route: ActivatedRoute,
    private router: Router) {   }

  ngOnInit(): void {
    this.fetch()
  }

  fetch() {
    this.categoryApi.getCategories().subscribe(categories => {
      this.categories = categories
    })
  }

  delete(id): void {
    this.categoryApi.deleteCategory(id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/list']);
        },
        error => {
          console.log(error);
        });
  }
}
