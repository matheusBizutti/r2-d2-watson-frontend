
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup.component';

export const SignupRoutes: Routes = [
  { path: '', component: SignupComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(SignupRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SignupRoutingModule { }
