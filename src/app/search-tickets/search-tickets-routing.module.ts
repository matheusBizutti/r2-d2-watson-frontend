import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchTicketsComponent } from './search-tickets.component';

export const searchTicketsRoutes: Routes = [
  { path: '', component: SearchTicketsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(searchTicketsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SearchTicketsRoutingModule { }
