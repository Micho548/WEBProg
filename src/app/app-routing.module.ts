import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MuestrasComponent } from './muestras/muestras.component';
import { DetallesComponent } from './detalles/detalles.component';

const routes: Routes = [
  {
    path: "muestras",
    component: MuestrasComponent
  },
  {
    path: "detalles",
    component: DetallesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
