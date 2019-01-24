import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule } from '@angular/material';

import { ModalCardComponent, ModalCardDialogComponent } from './modal-card/modal-card.component';
import { CardService } from './service/card.service';

@NgModule({
  declarations: [
    ModalCardComponent,
    ModalCardDialogComponent
  ],

  exports: [
    ModalCardComponent,
    ModalCardDialogComponent
  ],

  imports: [
    CommonModule,

    MatButtonModule,
    MatCardModule
  ],

  providers: [
    CardService
  ]
})
export class SharedModule { }
