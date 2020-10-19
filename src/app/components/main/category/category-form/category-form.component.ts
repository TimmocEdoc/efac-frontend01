import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Category } from 'src/types/model';
import { CategoryApi } from '../../api/category.api';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  category: Category;
  form: FormGroup

  constructor(private categoryApi: CategoryApi, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]]
    })
    if (this.category) {
      this.form.patchValue(this.category)
    }
  }

  newCategory(): void {
    this.category;
  }

  submit(): void {
    if (this.form.invalid) {
      return alert("failed");
    }
    let body = this.form.value
    this.categoryApi.saveCategory(body)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
}
