import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatPaginatorModule,
  MatTableModule,
  MatListModule,
  MatIconModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotifierModule } from 'angular-notifier';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MemberComponent } from './member/member.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { TestComponent } from './test/test.component';
import { MaterialComponent } from './material/material.component';

@NgModule({
  declarations: [
    AppComponent,

    HomePageComponent,
    MaterialComponent,
    MemberComponent,
    MemberListComponent,
    TestComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    NotifierModule,

    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule,
    MatListModule,
    MatIconModule,

  ],

  exports: [

  ],

  providers: [
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
