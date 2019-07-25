import { Injectable, Inject }      from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of }          from 'rxjs';
import { catchError, map, tap }    from 'rxjs/operators';

import { Root, Booking }           from './booking.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  bookingsJson: string = '/assets/bookings.json';

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl) {
  }

  public getUserBookings(userId: string): Observable<Booking[]> {
    return this.http.get<Root>(this.baseUrl + this.bookingsJson)
      .pipe(
        map(x => x.bookings),
        catchError(this.handleError('getUserBookings', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`BookingsService: ${message}`);
  }
}
