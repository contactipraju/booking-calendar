import { Injectable, Inject }      from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of }          from 'rxjs';
import { catchError, map, tap }    from 'rxjs/operators';

import { IBookingHttp }            from '../models/http-models/booking-http.interface';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl) {
  }

  private getUrl(id: string) {
    return this.baseUrl + '/assets/bookings-' + id + '.json';
  }

  public getBookings(id: string): Observable<IBookingHttp> {
    return this.http.get<IBookingHttp>(this.getUrl(id));
  }

  public deleteBooking(id: string): any {
    return this.http.get<IBookingHttp>(this.getUrl(id));
  }
}
