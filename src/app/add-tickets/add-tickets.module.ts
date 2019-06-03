import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AddTicketsComponent } from './add-tickets.component';
import { AddTicketsRoutingModule } from './add-tickets-routing.module';

@NgModule({
  declarations: [
    AddTicketsComponent
  ],
  imports: [
    SharedModule,
    AddTicketsRoutingModule
  ],
  providers: []
})
export class AddTicketsModule { }
