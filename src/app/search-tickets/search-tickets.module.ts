import { NgModule } from '@angular/core';

import { SearchTicketsComponent } from './search-tickets.component';
import { SearchTicketsRoutingModule } from './search-tickets-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TicketsSearchService } from './search-tickets.service';

@NgModule({
  declarations: [
    SearchTicketsComponent
  ],
  imports: [
    SharedModule,
    SearchTicketsRoutingModule
  ],
  providers: [TicketsSearchService]
})
export class SearchTicketsModule { }
