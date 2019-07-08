import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalModule }  from 'ngx-bootstrap';

import { BookingService } from './booking.service';

import { BookingCalendarComponent } from './booking-calendar/booking-calendar.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { TableViewComponent } from './table-view/table-view.component';
import { YearCalendarComponent } from './year-calendar/year-calendar.component';
import { YearTableComponent } from './year-table/year-table.component';
import { EditBookingComponent } from './edit-booking/edit-booking.component';

@NgModule({
  declarations: [
    BookingCalendarComponent,
    CalendarViewComponent,
    TableViewComponent,
    YearCalendarComponent,
    YearTableComponent,
    EditBookingComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    RouterModule.forRoot([
      { path: 'booking-calendar', component: BookingCalendarComponent }
    ])
  ],
  exports: [
    BookingCalendarComponent
  ],
  entryComponents: [EditBookingComponent],
  providers: [BookingService]
})
export class BookingCalendarModule { }
