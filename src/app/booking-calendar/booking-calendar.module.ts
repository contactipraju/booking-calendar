import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BookingService } from './booking.service';

import { BookingCalendarComponent } from './booking-calendar/booking-calendar.component';
import { YearTableComponent } from './year-table/year-table.component';

@NgModule({
  declarations: [
    BookingCalendarComponent,
    YearTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'booking-calendar', component: BookingCalendarComponent }
    ])
  ],
  exports: [
    BookingCalendarComponent
  ],
  entryComponents: [],
  providers: [BookingService]
})
export class BookingCalendarModule { }
