import { Injectable }              from '@angular/core';
import { Store, select }           from '@ngrx/store';
import { Effect, ofType, Actions } from '@ngrx/effects';

import { of }                             from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState }         from '../state/app.state';
import { selectBookingList } from '../selectors/booking.selectors';
import { BookingService }    from '../../services/booking.service';
import { IBookingHttp }      from '../../models/http-models/booking-http.interface';

import {
  GetBookings,
  GetBookingsSuccess,
  DeleteBooking,
  DeleteBookingSuccess,
  EBookingActions }       from '../actions/booking.actions';

@Injectable()
export class BookingEffects {

  @Effect()
  getBookings$ = this._actions$.pipe(
    ofType<GetBookings>(EBookingActions.GetBookings),
    map(action => action.payload),
    switchMap((id) => this._bookingService.getBookings(id)),
    switchMap((bookingHttp: IBookingHttp) => of(new GetBookingsSuccess(bookingHttp.bookings)))
  );

  @Effect()
  deleteBooking$ = this._actions$.pipe(
    ofType<DeleteBooking>(EBookingActions.DeleteBooking),
    map(action => action.payload),
    switchMap((id) => this._bookingService.deleteBooking(id)),
    switchMap((bookingHttp: IBookingHttp) => {
      return of(new DeleteBookingSuccess(bookingHttp.bookings));
    })
  );

  constructor(
    private _bookingService: BookingService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
