import { Component, OnInit }           from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

import { Store }           from '@ngrx/store';
import { IAppState }       from './../../store/state/app.state';
import { IUser }           from '../../models/user.interface';
import { SetSelectedUser } from './../../store/actions/user.actions';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  @Input() users: IUser[];
  @Output() userSelected: EventEmitter<number> = new EventEmitter();

  constructor(
    private _store: Store<IAppState>
  ) { }

  ngOnInit() {
    console.log("UsersListComponent - ngOnInit: ", this.users);
  }

  navigateToUser(user: IUser) {
    this._store.dispatch(new SetSelectedUser(user));
    this.userSelected.emit(user.id);
  }
}
