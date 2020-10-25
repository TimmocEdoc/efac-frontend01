import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryFormComponent } from './category/category-form/category-form.component';
import { CategoryComponent } from './category/category.component';
import { MainComponent } from './main.component';

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
        }
      ]
    },
  ]
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MainRoutingModule { }