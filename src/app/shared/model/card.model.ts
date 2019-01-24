export interface CardButton {
  id: number;
  button_title: string;
}

export interface CardContent {
  id: number;
  content: string;
}

export interface CardHeader {
  id: number;
  title: string;
  subtitle: string;
}

export class Card {
  id: number;
  card_background_image: string;
  card_header: CardHeader;
  card_content: CardContent;
  card_button: CardButton[];

  constructor(id?: number, image?: string, header?: CardHeader, content?: CardContent, button?: CardButton[]) {
    this.id = id;
    this.card_background_image = image;
    this.card_header = header;
    this.card_content = content;
    this.card_button = button;
  }

  reset() {
    this.id = null;
    this.card_background_image = '';
    this.card_header = null;
    this.card_content = null;
    this.card_button = null;
  }
}
