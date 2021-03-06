import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryFormComponent } from './category/category-form/category-form.component';
import { CategoryComponent } from './category/category.component';
import { MainComponent } from './main.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductComponent } from './product/product.component';
import { TableFormComponent } from './table/table-form/table-form.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
    {
      path: '',
      component: MainComponent,
      children: [
        {
          path: '',
          redirectTo: 'category'
        },
        {
          path: 'category',
          component: CategoryComponent
        },
        {
          path: 'category-form/:id',
          component: CategoryFormComponent
        },
        {
          path: 'category-form',
          component: CategoryFormComponent
        },
        {
          path: 'table',
          component: TableComponent
        },
        {
          path: 'table-form/:id',
          component: TableFormComponent
        },
        {
          path: 'table-form',
          component: TableFormComponent
        },
        {
          path: 'product',
          component: ProductComponent
        },
        {
          path: 'product-form/:id',
          component: ProductFormComponent
        },
        {
          path: 'product-form',
          component: ProductFormComponent
        }
      ]
    },
  ]
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MainRoutingModule { }