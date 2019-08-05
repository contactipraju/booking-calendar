import { createSelector } from '@ngrx/store';

import { IAppState }      from '../state/app.state';
import { IBookingState }  from '../state/booking.state';

const selectBookings = (state: IAppState) => state.bookings;

export const selectBookingList = createSelector(
  selectBookings,
  (state: IBookingState) => state.bookings
);
