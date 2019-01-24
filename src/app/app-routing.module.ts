import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { MemberComponent } from './member/member.component';
import { TestComponent } from './test/test.component';
import { MaterialComponent } from './material/material.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'member',
    component: MemberComponent
  },
  {
    path: 'materials',
    component: MaterialComponent
  },
  {
    path: 'test',
    component: TestComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
