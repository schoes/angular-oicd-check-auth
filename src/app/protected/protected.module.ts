import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProtectedComponent } from './protected.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ProtectedComponent }]),
  ],
  declarations: [],
})
export class ProtectedModule {}
