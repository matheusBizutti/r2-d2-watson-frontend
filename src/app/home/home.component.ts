import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ThfMenuItem } from '@totvs/thf-ui/components/thf-menu';
import { ThfToolbarAction, ThfToolbarProfile } from '@totvs/thf-ui/components/thf-toolbar';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  readonly items: Array<ThfMenuItem> = [
    { label: 'Dashboard', link: 'dashboard', icon: 'thf-icon thf-icon-chart-area' },
    { label: 'Consultar', link: 'search-tickets', icon: 'thf-icon thf-icon-search' },
    { label: 'Novo ticket', link: 'add-tickets', icon: 'thf-icon thf-icon-plus' }
  ];

  public readonly profile: ThfToolbarProfile = {
    subtitle: <any>this.authService.getEmail(),
    title: <any>this.authService.getNickName()
  };

  public readonly profileActions: Array<ThfToolbarAction> = [
    { icon: 'thf-icon-exit', label: 'Sair', type: 'danger', separator: true, action: () => this.exit() }
  ];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {}

  private exit() {
    this.authService.clear();
    this.router.navigate(['/login']);
  }

}
