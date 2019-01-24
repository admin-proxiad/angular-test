import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  constructor(
    iconRegistry: MatIconRegistry,
    santitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'add',
      santitizer.bypassSecurityTrustResourceUrl('assets/img/icon/add.svg')
    );
  }

  ngOnInit() {
  }

}
