import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckAuthTwoComponent } from './check-auth-two.component';
import { CheckAuthTwoGuard } from './check-auth-two.guard';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CheckAuthTwoComponent,
        canActivate: [CheckAuthTwoGuard],
      },
    ]),
  ],
  declarations: [],
})
export class CheckAuthTwoModule {}
