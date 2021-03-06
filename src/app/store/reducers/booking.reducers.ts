import { BookingActions, EBookingActions }    from './../actions/booking.actions';
import { initialBookingState, IBookingState } from '../state/booking.state';

import { DateFormats } from '../../utils/date';
import { IBooking }    from 'src/app/models/booking.interface';

const processBookings = (bookings: IBooking[]) => {
  for(let i=0; i<bookings.length; i++) {
    bookings[i].startDate = new Date(bookings[i].startDate),
    bookings[i].endDate   = new Date(bookings[i].endDate),

    bookings[i].startDateFormatted = DateFormats.formattedDate(bookings[i].startDate);
    bookings[i].endDateFormatted   = DateFormats.formattedDate(bookings[i].endDate);
  }

  return bookings;
}

const deleteBooking = (bookings: IBooking[], id:any) => {
  let newB:IBooking[] = [];

  for(let i=0; i<bookings.length; i++) {
    // TODO: no Backend Service available now, Delete first booking..
    if(i) {
      newB.push(bookings[i]);
    }
  }

  return newB;
}

export function bookingReducers(state = initialBookingState, action: BookingActions): IBookingState {
  switch(action.type) {
    case EBookingActions.GetBookingsSuccess: {
      return {
        ...state,
        bookings: processBookings(action.payload)
      };
    }

    case EBookingActions.DeleteBookingSuccess: {
      return Object.assign({}, state, { bookings: deleteBooking(state.bookings, action.payload)});
    }

    default:
      return state;
  }
};