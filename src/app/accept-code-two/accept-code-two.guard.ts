import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { map, Observable } from 'rxjs';

@Injectable()
export class AcceptCodeTwoGuard implements CanActivate {
  constructor(private readonly oidcService: OidcSecurityService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.oidcService.checkAuth().pipe(
      map((response) => {
        console.log(response.idToken);
        // here should the id token be adapted with the changes we made while we were at the IDP and it does not happen here
        return response.isAuthenticated;
      })
    );
  }
}
