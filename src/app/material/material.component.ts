import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';

import { Card } from './../shared/model/card.model';
import { CardService } from '../shared/service/card.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {
  myCard = new Card();

  constructor(
    private notifierService: NotifierService,
    private cardService: CardService
  ) { }

  ngOnInit() {
  }

  callCardModal(material: string) {
    console.log('CardServiceCall...');
    this.myCard.reset();

    switch (material) {
      case 'phone': this.setCardForPhone();
                    console.log('CallingPhoneCardDetails...');
                    this.cardService.showCardDetails(this.myCard);
                    break;

      case 'mouse': this.setCardForKeyboard();
                    console.log('CallingMouseCardDetails...');
                    this.cardService.showCardDetails(this.myCard);
                    break;

      case 'keyboard': this.setCardForKeyboard();
                       console.log('CallingKeyboardCardDetails...');
                       this.cardService.showCardDetails(this.myCard);
                       break;

      case 'screen': this.setCardForScreen();
                     console.log('CallingScreenCardDetails...');
                     this.cardService.showCardDetails(this.myCard);
                     break;
    }
  }

  setCardForPhone() {
    this.myCard.id = 1;

    const header = {
      id: 1,
      title: 'iPhone 8 Plus Product RED',
      subtitle: 'Mobile Phone'
    };

    const content = {
      id: 1,
      content: 'Ceci un iPhone 8 Plus product RED. Une partie est donc reversée à la recherche contre le SIDA.'
    };

    const buttons = [
      { id: 1, button_title: 'POST' },
      { id: 2, button_title: 'SHARE' },
      { id: 3, button_title: 'LIKE' }
    ];

    this.myCard.card_header = header;
    this.myCard.card_background_image = '../../assets/img/card/iPhone8.jpg';
    this.myCard.card_content = content;
    this.myCard.card_button = buttons;
  }

  setCardForMouse() {
    this.myCard.id = 1;

    const header = {
      id: 1,
      title: 'Souris',
      subtitle: 'External Device'
    };

    const content = {
      id: 1,
      content: 'Ceci est une souris filaire pour ordinateur de bureau de couleur noire.'
    };

    const buttons = [
      { id: 1, button_title: 'POST' },
      { id: 2, button_title: 'SHARE' },
      { id: 3, button_title: 'LIKE' }
    ];

    this.myCard.card_header = header;
    this.myCard.card_background_image = '../../assets/img/card/clavier.jpg';
    this.myCard.card_content = content;
    this.myCard.card_button = buttons;
  }

  setCardForKeyboard() {
    this.myCard.id = 1;

    const header = {
      id: 1,
      title: 'Clavier',
      subtitle: 'External Device'
    };

    const content = {
      id: 1,
      content: 'Ceci est un clavier pour ordinateur de bureau filaire.'
    };

    const buttons = [
      { id: 1, button_title: 'POST' },
      { id: 2, button_title: 'SHARE' },
      { id: 3, button_title: 'LIKE' }
    ];

    this.myCard.card_header = header;
    this.myCard.card_background_image = '../../assets/img/card/clavier.jpg';
    this.myCard.card_content = content;
    this.myCard.card_button = buttons;
  }

  setCardForScreen() {
    this.myCard.id = 1;

    const header = {
      id: 1,
      title: 'Moniteur',
      subtitle: 'External Device'
    };

    const content = {
      id: 1,
      content: 'Ceci est un écran pour ordinateur de bureau de couleur noire.'
    };

    const buttons = [
      { id: 1, button_title: 'POST' },
      { id: 2, button_title: 'SHARE' },
      { id: 3, button_title: 'LIKE' }
    ];

    this.myCard.card_header = header;
    this.myCard.card_background_image = '../../assets/img/card/ecran.jpg';
    this.myCard.card_content = content;
    this.myCard.card_button = buttons;
  }
}
