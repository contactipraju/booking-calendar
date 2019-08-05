import { ActionReducerMap } from '@ngrx/store';
import { routerReducer }    from '@ngrx/router-store';

import { IAppState }        from '../state/app.state';

import { userReducers }     from './user.reducers';
import { bookingReducers }  from './booking.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  users: userReducers,
  bookings: bookingReducers
};