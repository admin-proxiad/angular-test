import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { Member } from '../../shared/model/member.model';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  members: Member[] = [
    {id: 1, display_name: 'Robert RICHARD', email: 'rrichard@proxiad.fr'},
    {id: 2, display_name: 'Andy RICHARD', email: 'arichard@proxiad.fr'},
    {id: 3, display_name: 'Antoine BOISSON', email: 'aboisson@proxiad.fr'},
    {id: 4, display_name: 'Emy BEAN', email: 'ebean@proxiad.fr'},
    {id: 5, display_name: 'Paul LEONARD', email: 'pleonard@proxiad.fr'},
  ];

  displayedColumns: string[] = [ 'name', 'email' ];
  dataSource = new MatTableDataSource<Member>(this.members);

  constructor() {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
