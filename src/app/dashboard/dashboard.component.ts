import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThfBreadcrumb } from '@totvs/thf-ui';
import { Subscription } from 'rxjs';
import { DashboardService } from './dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private totalTickets;

  public readonly breadcrumb: ThfBreadcrumb = {
    items: [
      { label: 'Login', link: '/login' },
      { label: 'Dashboard R2-D2' }
    ]
  };

  constructor(private dashboardService: DashboardService, private router: Router) { }

  ngOnInit() {
    this.subscription = this.dashboardService.getTickets().subscribe(res => {
      this.totalTickets = res.length;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  navigateTo(route = '') {
    return this.router.navigate([route]);
  }

}
