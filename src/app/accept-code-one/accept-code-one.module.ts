import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AcceptCodeOneComponent } from './accept-code-one.component';
import { AcceptCodeOneGuard } from './accept-code-one.guard';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AcceptCodeOneComponent,
        canActivate: [AcceptCodeOneGuard],
      },
    ]),
  ],
  declarations: [],
})
export class AcceptCodeOneModule {}
