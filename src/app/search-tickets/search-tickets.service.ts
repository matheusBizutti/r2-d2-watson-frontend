import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { BaseUrl } from '../baseurl/baseurl.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TicketsSearchService {

  constructor(private http: HttpClient, private baseUrl: BaseUrl) { }

  search(code = ''): Observable<any> {
    return this.http.get(this.baseUrl.getBaseUrl() + `tickets/detail/${code}`);
  }

}
