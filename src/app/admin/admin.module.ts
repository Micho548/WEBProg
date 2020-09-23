import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NbCardModule, NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { UserListComponent } from './user-list/user-list.component';

const Nebular = [
  NbThemeModule.forRoot({ name: 'default' }),
  NbLayoutModule,
  NbEvaIconsModule,
  NbCardModule
];

@NgModule({
  declarations: [ AdminComponent, UserListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    Nebular
  ]
})
export class AdminModule { }
