import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AcceptCodeTwoComponent } from './accept-code-two.component';
import { AcceptCodeTwoGuard } from './accept-code-two.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AcceptCodeTwoComponent,
        canActivate: [AcceptCodeTwoGuard],
      },
    ]),
  ],
  declarations: [],
})
export class AcceptCodeTwoModule {}
