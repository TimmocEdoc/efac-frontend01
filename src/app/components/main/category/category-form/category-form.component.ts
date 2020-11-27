import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { iif, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Category, CategoryDto } from 'src/types/model';
import Swal from 'sweetalert2';
import { CategoryApi } from '../../api/category.api';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  categoryDto: CategoryDto;
  category: Category;
  form: FormGroup;
  private routeSub: String;

  constructor(private categoryApi: CategoryApi, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]]
    })
    this.routeSub = this.route.snapshot.params.id;
    this.categoryApi.getCategory(this.routeSub).subscribe(categoryDto => {
      if (categoryDto.category) {
        this.form.patchValue(categoryDto.category);
        this.category = categoryDto.category;
      }
    })
  }

  ngOnDestroy() {
    this.routeSub = null;
  }

  newCategory(): void {
    this.category;
  }

  successNotification(){
    Swal.fire({
      icon: "success",
      title: "Category has been saved.",
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
    console.log(this.category);
    console.log(body)
    if(this.category) {
      body = Object.assign({}, body, { id: this.category.id})
      this.categoryApi.updateCategory(this.category.id, body).pipe(tap(() => {
      })).subscribe((response) => {
        console.log(response);
        this.successNotification();
        this.router.navigate(['/category']);
      }, (error) => {
        console.log(error)
      })
    } else {
      this.categoryApi.saveCategory(body)
      .subscribe(
        response => {
          console.log(response);
          this.successNotification();
          this.router.navigate(['/category']);
        },
        error => {
          console.log(error);
        });
    }
  }
}
