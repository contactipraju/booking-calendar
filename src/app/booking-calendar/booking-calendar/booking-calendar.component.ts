import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';

import { Store, select }      from '@ngrx/store';

import { IAppState }          from './../../store/state/app.state';
import { GetBookings }        from './../../store/actions/booking.actions';
import { selectBookingList }  from './../../store/selectors/booking.selectors';

@Component({
  selector: 'bc-booking-calendar',
  templateUrl: './booking-calendar.component.html',
  styleUrls: ['./booking-calendar.component.scss']
})
export class BookingCalendarComponent implements OnInit {
  bookings$ = this._store.pipe(select(selectBookingList));

  constructor(
    private _store: Store<IAppState>,
    private activatedRoute: ActivatedRoute
    ) {
  }

  ngOnInit() {
    this._store.dispatch(new GetBookings(this.activatedRoute.snapshot.params.id));
  }
}
