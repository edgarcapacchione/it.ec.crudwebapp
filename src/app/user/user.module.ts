import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { UserCreateComponent } from './user-create/user-create.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';

import { UserRoutingModule } from './user.routing';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    UserListComponent,
    UserCreateComponent,
    UserDeleteComponent,
    UserDetailComponent
  ],
  imports: [
    UserRoutingModule,
    SharedModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
