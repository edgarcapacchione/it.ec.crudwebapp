import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Paths } from '../shared/constants';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: Paths.USER_CREATE,
    component: UserCreateComponent
  }, {
    path: Paths.USER_DELETE,
    component: UserDeleteComponent
  }, {
    path: Paths.USER_DETAIL,
    component: UserDetailComponent
  }, {
    path: Paths.USER_LIST,
    component: UserListComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { 

  
}
