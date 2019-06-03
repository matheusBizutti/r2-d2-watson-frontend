import { Injectable } from '@angular/core';

@Injectable()
export class BaseUrl {

  private url = 'http://localhost:3500/';
  private urlAuth = 'http://localhost:3500/users/auth';

  constructor() { }

  getBaseUrl() {
    return this.url;
  }

  getBaseUrlAuthenticate() {
    return this.urlAuth;
  }

}
