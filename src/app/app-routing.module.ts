import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Paths } from './shared/constants';


const routes: Routes = [
  {
    path: Paths.USER,
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
