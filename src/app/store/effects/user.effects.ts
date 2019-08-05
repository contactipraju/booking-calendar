import { Injectable }              from '@angular/core';
import { Store, select }           from '@ngrx/store';
import { Effect, ofType, Actions } from '@ngrx/effects';

import { of }                             from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState }      from '../state/app.state';
import { selectUserList } from '../selectors/user.selectors';
import { UserService }    from '../../services/user.service';
import { IUserHttp }      from '../../models/http-models/user-http.interface';

import {
  GetUser,
  GetUserSuccess,
  GetUsers,
  GetUsersSuccess,
  EUserActions }          from '../actions/user.actions';


@Injectable()
export class UserEffects {

  @Effect()
  getUser$ = this._actions$.pipe(
    ofType<GetUser>(EUserActions.GetUser),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectUserList))),
    switchMap(([id, users]) => {
      const selectedUser = users.filter(user => user.id === +id)[0];
      return of(new GetUserSuccess(selectedUser));
    })
  );

  @Effect()
  getUsers$ = this._actions$.pipe(
    ofType<GetUsers>(EUserActions.GetUsers),
    switchMap(() => this._userService.getUsers()),
    switchMap((userHttp: IUserHttp) => of(new GetUsersSuccess(userHttp.users)))
  );

  constructor(
    private _userService: UserService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
