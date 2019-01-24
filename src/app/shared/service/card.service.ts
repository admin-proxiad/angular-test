import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Card } from './../model/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  // Observable Card source
  private showCardDetailsSource = new Subject<Card>();

  // Observable Card stream
  showCardDetailsSource$ = this.showCardDetailsSource.asObservable();

  constructor() { }

  showCardDetails(card: Card) {
    console.log('PassingDataToSubject...');
    this.showCardDetailsSource.next(card);
  }
}
