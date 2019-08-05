import { RouterReducerState } from '@ngrx/router-store';

import { IUserState,    initialUserState } from './user.state';
import { IBookingState, initialBookingState } from './booking.state';

export interface IAppState {
  router?: RouterReducerState;
  users: IUserState;
  bookings: IBookingState;
}

export const initialAppState: IAppState = {
  users: initialUserState,
  bookings: initialBookingState
}

export function getInitialState(): IAppState {
  return initialAppState;
}