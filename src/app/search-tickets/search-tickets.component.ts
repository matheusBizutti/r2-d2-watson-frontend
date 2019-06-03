import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThfBreadcrumb } from '@totvs/thf-ui';
import { TicketsSearchService } from './search-tickets.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-tickets',
  templateUrl: './search-tickets.component.html',
  styleUrls: ['./search-tickets.component.css']
})
export class SearchTicketsComponent implements OnInit, OnDestroy {

  private status;
  private subscription: Subscription;
  private ticket;
  private ticketCode;

  public readonly breadcrumb: ThfBreadcrumb = {
    items: [
      { label: 'Página inicial', link: '/home/dashboard' },
      { label: 'Consultar ticket' }
    ]
  };

  constructor(private ticketsService: TicketsSearchService) { }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  clear() {
    this.ticket = this.ticketCode = undefined;
  }

  formatDate(date = '') {
    return date.substr(8, 2) + '/' + date.substr(5, 2) + '/' + date.substr(0, 4);
  }

  getStatus(status) {
    this.status = status === 1;
    return this.status ? 'success' : 'warning';
  }
  searchTicket() {
    this.subscription = this.ticketsService.search(this.ticketCode).subscribe(res => {
      this.ticket = res;

      if (this.ticket.problem_description === 1) {
        this.ticket.problem_description = 'Sistema lento';
      } else if (this.ticket.problem_description === 2) {
        this.ticket.problem_description = 'Sem internet';
      } else {
        this.ticket.problem_description = 'Recuperar senha';
      }
    });
  }

}
