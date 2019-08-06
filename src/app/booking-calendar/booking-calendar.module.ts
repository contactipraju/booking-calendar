/* Angular Modules */
import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { RouterModule } from '@angular/router';

/* Ngrx Modules, for Store */
import { StoreModule }                 from '@ngrx/store';
import { EffectsModule }               from '@ngrx/effects';
import { StoreDevtoolsModule }         from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

/* Third-party Modules */
import { ModalModule } from 'ngx-bootstrap';

/* Store Reducers */
import { appReducers }    from './../store/reducers/app.reducers';

/* Store Effects */
import { UserEffects }    from './../store/effects/user.effects';
import { BookingEffects } from './../store/effects/booking.effects';

/* Services */
import { UserService }    from './../services/user.service';
import { BookingService } from './../services/booking.service';

/* Components */
import { UsersComponent }     from './users/users.component';
import { UsersListComponent } from './users-list/users-list.component';

import { BookingCalendarComponent } from './booking-calendar/booking-calendar.component';
import { CalendarViewComponent }    from './calendar-view/calendar-view.component';
import { TableViewComponent }       from './table-view/table-view.component';

import { YearCalendarComponent }    from './year-calendar/year-calendar.component';
import { YearTableComponent }       from './year-table/year-table.component';

import { EditBookingComponent }     from './edit-booking/edit-booking.component';
import { MultiselectListComponent } from './multiselect-list/multiselect-list.component';

@NgModule({
  declarations: [
    BookingCalendarComponent,
    CalendarViewComponent,
    TableViewComponent,
    YearCalendarComponent,
    YearTableComponent,
    EditBookingComponent,
    MultiselectListComponent,
    UsersComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects, BookingEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router'}),
    ModalModule.forRoot(),
    RouterModule.forRoot([
      { path: 'users', component: UsersComponent },
      { path: 'user/:id', component: BookingCalendarComponent },
      { path: '', redirectTo: '/users', pathMatch: 'full' }
    ])
  ],
  exports: [
    BookingCalendarComponent
  ],
  entryComponents: [EditBookingComponent, MultiselectListComponent],
  providers: [BookingService, UserService]
})
export class BookingCalendarModule { }
