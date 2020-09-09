import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MuestrasComponent } from './muestras/muestras.component';
import { DetallesComponent } from './detalles/detalles.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'muestras',
        component: MuestrasComponent
      },
      {
        path: 'detalles',
        component: DetallesComponent
      },
      {
        path: 'registrar',
        component: RegisterComponent
      },
      {
        path: 'ingresar',
        component: LoginComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
