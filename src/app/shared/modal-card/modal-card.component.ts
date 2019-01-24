import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Card } from '../model/card.model';
import { Subscription } from 'rxjs';
import { CardService } from '../service/card.service';

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.scss']
})
export class ModalCardComponent implements OnInit, OnDestroy {
  card: Card;
  subscription: Subscription;

  constructor(
    private dialogRef: MatDialogRef<ModalCardDialogComponent>,
    private cardService: CardService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.cardService.showCardDetailsSource$.subscribe(card => {
      console.log('SubscribingCardDetails...');
      if (card !== null && card !== undefined && card !== this.card) {
        this.card = card;
        this.openDialog();
      }
    });
  }

  ngOnDestroy(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalCardDialogComponent, {
      data: {
        card: this.card
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.card = null;
    });
  }

  close() {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-modal-card-dialog',
  templateUrl: 'modal-card-dialog.component.html',
  styleUrls: ['./modal-card.component.scss']
})
export class ModalCardDialogComponent  {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Card
  ) { }
}
