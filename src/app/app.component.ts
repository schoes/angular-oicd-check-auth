import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private readonly oidcService: OidcSecurityService,
    private readonly router: Router
  ) {}
  name = 'Angular ' + VERSION.major;

  checkAuthOne(): void {
    this.router.navigateByUrl('/protected');
  }
  checkAuthTwo(): void {
    this.oidcService.authorize('auth-config', {
      customParams: {
          'auth-strength': 'qoa2'
      },
      // we change here the URL but the IDP is the same at the time when the user returns
    //   urlHandler(url: string): any {
    //     const authRequestUrl = new URL(url);
    //     window.location.href = `change to another idp url`;
    // },
      redirectUrl: `${location.origin}/accept-code-two`
  });
  }
}
