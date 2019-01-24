import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  links = [
    { key: 'home', value: 'Accueil'},
    { key: 'member', value: 'Membres'},
    { key: 'material', value: 'Équipements'},
    { key: 'test', value: 'Test'}
  ];

  constructor(
    private router: Router
  ) {}

  isRouterLinkActive(menu: string): boolean {
    return this.router.url.indexOf(menu) !== -1;
  }
}
