import { IBooking } from '../../models/booking.interface';

export interface IBookingState {
  bookings: IBooking[];
}

export const initialBookingState: IBookingState = {
  bookings: null
}
