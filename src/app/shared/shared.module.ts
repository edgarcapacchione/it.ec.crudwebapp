import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdSortableHeader } from './ngb-table.utils';

import { UtilsService } from './services/utils.service';

@NgModule({
  declarations: [
    NgbdSortableHeader
  ],
  imports: [
    NgbModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    NgbModule,
    CommonModule,
    FormsModule,
    NgbdSortableHeader
  ],
  providers: [
    UtilsService
  ]
})
export class SharedModule { }
