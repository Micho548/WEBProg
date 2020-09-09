import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { Component1Component } from './component1/component1.component';
import { AdminComponent } from './admin.component';
import { Component2Component } from './component2/component2.component';


@NgModule({
  declarations: [Component1Component, AdminComponent, Component2Component],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
