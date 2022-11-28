import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AuthModule,
  LogLevel,
  OpenIdConfiguration,
  StsConfigHttpLoader,
  StsConfigLoader,
} from 'angular-auth-oidc-client';
import { map, of } from 'rxjs';

export const authConfigLoader = (): StsConfigHttpLoader => {
  const config$ = of({}).pipe(
    map(
      (appConfig) =>
        ({
          configId: 'auth-config',
          triggerAuthorizationResultEvent: true,
          logLevel: LogLevel.Debug,
          historyCleanupOff: true,
          authority: 'https://offeringsolutions-sts.azurewebsites.net',
          redirectUrl: window.location.origin,
          clientId: 'angularCodeRefreshTokens',
          scope: 'openid profile email offline_access',
          responseType: 'code',
          silentRenew: true,
          useRefreshToken: true,
          redirectUrl: `${location.origin}/b2c-useraccount/${RoutePath.AcceptCode}`,
          customParamsAuthRequest: {
            claims: JSON.stringify({
              id_token: {
                acr: null,
                cnumber: null,
                ['swissid.sub']: null,
                ['swissid.acr']: null,
              },
            }),
          },
        } as OpenIdConfiguration)
    )
  );
  return new StsConfigHttpLoader(config$);
};

@NgModule({
  imports: [
    AuthModule.forRoot({
      loader: {
        provide: StsConfigLoader,

        useFactory: authConfigLoader,
      },
    }),
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {}
