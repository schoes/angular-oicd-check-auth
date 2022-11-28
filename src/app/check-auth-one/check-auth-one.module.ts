import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CheckAuthOneComponent } from './check-auth-one.component';
import { CheckAuthOneGuard } from './check-auth-one.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CheckAuthOneComponent,
        canActivate: [CheckAuthOneGuard],
      },
    ]),
  ],
  declarations: [],
})
export class CheckAuthOneModule {}
