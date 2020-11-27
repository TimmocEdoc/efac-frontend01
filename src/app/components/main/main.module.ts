import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CategoryComponent } from './category/category.component';
import { IndexComponent } from './index/index.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ProductComponent } from './product/product.component';
import { TableComponent } from './table/table.component';
import { CategoryFormComponent } from './category/category-form/category-form.component';
import { TableFormComponent } from './table/table-form/table-form.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatOptionModule } from '@angular/material/core';


@NgModule({
    declarations: [
      MainComponent,
      CategoryComponent,
      IndexComponent,
      TableComponent,
      ProductComponent,
      CategoryFormComponent,
      TableFormComponent,
      ProductFormComponent
    ],
    imports: [
      HttpClientModule,
      FormsModule,
      CommonModule,
      ReactiveFormsModule,
      MatSelectModule,
      MatOptionModule,
      MatFormFieldModule,
      MainRoutingModule
    ]
  })
  export class MainModule { }