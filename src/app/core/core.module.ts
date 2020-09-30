import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ErrorPageComponent,
    FooterComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    NavbarComponent,
    ErrorPageComponent,
    FooterComponent
  ]
})
export class CoreModule { }
