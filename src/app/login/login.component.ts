
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { ThfPageLogin, ThfPageLoginLiterals } from '@totvs/thf-templates/components/thf-page-login';
import { ThfNotificationService } from '@totvs/thf-ui';

import { AuthService } from '../auth/auth.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  customLiterals: ThfPageLoginLiterals = {
    title: 'Seja bem-vindo ao Portal R2-D2  ',
    loginErrorPattern: 'Login obrigatório',
    loginPlaceholder: 'Insira seu usuário de acesso',
    passwordErrorPattern: 'Senha obrigatória',
    passwordPlaceholder: 'Insira sua senha de acesso',
    rememberUser: 'Lembrar usuário',
    submitLabel: 'Entrar',
    registerUrl: 'Novo cadastro',
    forgotPassword: 'Esqueceu sua senha?',
    highlightInfo: 'A melhor solução de abertura de tickets',
  };

  constructor(private router: Router,
              private loginService: LoginService,
              private authService: AuthService,
              private thfNotification: ThfNotificationService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  signIn(formData: ThfPageLogin) {

    const body = {
      email: formData.login,
      password: formData.password
    };

    this.subscription = this.loginService.siginAuth(body).subscribe(res => {
      this.authService.setToken(res['token']);
      this.router.navigate(['home/dashboard']);
    }, err => {
      this.thfNotification.error(`Acesso inválido - ${JSON.stringify(err.error)}`);
    });

  }
}
