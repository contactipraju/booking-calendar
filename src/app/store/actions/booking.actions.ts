import { Action }   from '@ngrx/store';

import { IBooking } from '../../models/booking.interface';

export enum EBookingActions {
  GetBookings = '[Booking] Get Bookings',
  GetBookingsSuccess = '[Booking] Get Bookings Success',
  DeleteBooking = '[Booking] Delete Booking',
  DeleteBookingSuccess = '[Booking] Delete Booking Success'
}

export class GetBookings implements Action {
  public readonly type = EBookingActions.GetBookings;
  constructor(public payload: number) {}
}

export class GetBookingsSuccess implements Action {
  public readonly type = EBookingActions.GetBookingsSuccess;
  constructor(public payload: IBooking[]) {}
}

export class DeleteBooking implements Action {
  public readonly type = EBookingActions.DeleteBooking;
  constructor(public payload: number) {}
}

export class DeleteBookingSuccess implements Action {
  public readonly type = EBookingActions.DeleteBookingSuccess;
  constructor(public payload: IBooking[]) {}
}

export type BookingActions = GetBookings | GetBookingsSuccess | DeleteBooking | DeleteBookingSuccess;