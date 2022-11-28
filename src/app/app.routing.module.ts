import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  AutoLoginAllRoutesGuard,
  AutoLoginPartialRoutesGuard,
} from 'angular-auth-oidc-client';

const ROUTES: Routes = [
  {
    path: 'accept-code-one',
    loadChildren: () =>
      import('./accept-code-one/accept-code-one.module').then(
        (m) => m.AcceptCodeOneModule
      ),
  },
  {
    path: 'auth-two',
    loadChildren: () =>
      import('./accept-code-two/accept-code-two.module').then(
        (m) => m.AcceptCodeTwoModule
      ),
  },
  {
    path: 'protected',
    loadChildren: () =>
      import('./protected/protected.module').then((m) => m.ProtectedModule),
    canLoad: [AutoLoginPartialRoutesGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      // async load of child modules after initial page is rendered
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'corrected',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
