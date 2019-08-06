import { Injectable, Inject }      from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of }          from 'rxjs';
import { catchError, map, tap }    from 'rxjs/operators';

import { IUserHttp }               from '../models/http-models/user-http.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = '/assets/users.json';

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl) {
  }

  public getUsers(): Observable<IUserHttp> {
    return this.http.get<IUserHttp>(this.baseUrl + this.url);
  }
}
