import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { AutoLoginPartialRoutesGuard } from 'angular-auth-oidc-client';

const ROUTES: Routes = [
  {
    path: 'auth-one',
    loadChildren: () =>
      import('./check-auth-one/check-auth-one.module').then(
        (m) => m.CheckAuthOneModule
      ),
    canLoad: [AutoLoginPartialRoutesGuard],
  },
  {
    path: 'auth-two',
    loadChildren: () =>
      import('./check-auth-two/check-auth-two.module').then(
        (m) => m.CheckAuthTwoModule
      ),
    canLoad: [AutoLoginPartialRoutesGuard],
  },
];

@NgModule({
  imports: [CommonModule],
  declarations: [],
})
export class AppRoutingModule {}
