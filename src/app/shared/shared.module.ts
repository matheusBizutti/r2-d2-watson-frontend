import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ThfModule } from '@totvs/thf-ui';
import { CookieService } from 'ngx-cookie-service';

import { AuthGuard } from '../auth-guard/auth-guard.service';
import { AuthService } from '../auth/auth.service';
import { BaseUrl } from '../baseurl/baseurl.service';
import { InterceptorModule } from '../interceptor/interceptor.module';
import { ThfPageLoginModule } from '@totvs/thf-templates/components/thf-page-login';
import { ThfTemplatesModule } from '@totvs/thf-templates';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ThfModule,
    ThfTemplatesModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ThfModule,
    ThfPageLoginModule,
    ThfTemplatesModule,
    InterceptorModule
  ],
  providers: [BaseUrl, AuthService, AuthGuard, CookieService]
})
export class SharedModule { }
