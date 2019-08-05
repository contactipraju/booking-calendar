import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Store, select }     from '@ngrx/store';

import { IAppState }         from './../../store/state/app.state';
import { GetUsers }          from './../../store/actions/user.actions';
import { selectUserList }    from './../../store/selectors/user.selectors';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$ = this._store.pipe(select(selectUserList));

  constructor(
    private _store: Store<IAppState>,
    private _router: Router
  ) { }

  ngOnInit() {
    this._store.dispatch(new GetUsers());
  }

  navigateToUser(id: number) {
    this._router.navigate(['user', id]);
  }
}
