import { NgModule } from '@angular/core';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ErrorPageComponent,
    FooterComponent
  ],
  imports: [],
  exports: [
    NavbarComponent,
    ErrorPageComponent,
    FooterComponent
  ]
})
export class CoreModule { }
