import { Component, OnInit, OnDestroy } from '@angular/core';

import { ThfBreadcrumb } from '@totvs/thf-ui/components/thf-breadcrumb';
import { Router } from '@angular/router';
import { ThfNotificationService } from '@totvs/thf-ui';
import { Subscription } from 'rxjs';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {

  public readonly breadcrumb: ThfBreadcrumb = {
    items: [
      { label: 'Página inicial', link: '/login' },
      { label: 'Cadastrar novo usuário' }
    ]
  };

  partnerPersonalData = {
    email: undefined,
    nickname: undefined,
    password: undefined,
  };

  private subscription: Subscription;

  constructor(private router: Router,
              private thfNotification: ThfNotificationService,
              private signupService: SignupService) {}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit() {}

  signup() {

    this.subscription = this.signupService.signup(this.partnerPersonalData).subscribe(res => {
      this.thfNotification.success('Usuário cadastrado com sucesso.');
      this.router.navigate(['/login']);
    }, err => {
      this.thfNotification.error('Não foi possível efetuar o cadastro.');
    });
  }

}
