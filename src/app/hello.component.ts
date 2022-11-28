import { Component, Input } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  constructor(private readonly oicdService: OidcSecurityService) {}
  @Input() name: string;

  checkAuthOne(): void {
    this.oicdService.authorize();
  }
  checkAuthTwo(): void {}
}
