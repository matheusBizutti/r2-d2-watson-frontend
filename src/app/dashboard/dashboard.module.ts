import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardService } from './dashboard.service';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    SharedModule,
    DashboardRoutingModule
  ],
  providers: [DashboardService]
})
export class DashboardModule { }
