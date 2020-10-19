import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services.service';
import { Category } from 'src/types/model';
import { CategoryApi } from '../api/category.api';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[]
  
  constructor(private categoryApi: CategoryApi) {   }

  ngOnInit(): void {
    this.fetch()
  }

  fetch() {
    this.categoryApi.getCategories().subscribe(categories => {
      this.categories = categories
    })
  }
}
