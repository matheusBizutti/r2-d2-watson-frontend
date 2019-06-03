
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTicketsComponent } from './add-tickets.component';

export const addTicketsRoutes: Routes = [
  { path: '', component: AddTicketsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(addTicketsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AddTicketsRoutingModule { }
