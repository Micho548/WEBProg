import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'component1',
    component: Component1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }


// http:// ....com/.../component1