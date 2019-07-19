import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import { BookingService }    from './../booking.service';

import { DateFormats }       from '../../utils/date';

@Component({
  selector: 'bc-booking-calendar',
  templateUrl: './booking-calendar.component.html',
  styleUrls: ['./booking-calendar.component.scss']
})
export class BookingCalendarComponent implements OnInit {

  // TODO: Move this to a store object (Ngrx?)
  store:any = {
    user: {
      id: 123
    },
    bookings: []
  };

  constructor(private activatedRoute: ActivatedRoute, private bookingService: BookingService) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const param = params.get('id');
      if (param) {
        this.store.user.id = param;
      }

      this.loadBookings();
    });
  }

  processBookings(bookings) {
    for(let i=0; i<bookings.length; i++) {
      bookings[i].startDate = new Date(bookings[i].startDate),
      bookings[i].endDate   = new Date(bookings[i].endDate),

      bookings[i].startDateFormatted = DateFormats.formattedDate(bookings[i].startDate);
      bookings[i].endDateFormatted   = DateFormats.formattedDate(bookings[i].endDate);
    }

    return bookings;
  }

  loadBookings() {
    this.bookingService.getUserBookings(this.store.user.id).subscribe(
      data => {
        console.log("loadBookings: ", data);
        this.store.bookings = this.processBookings(data);
      },
      () => {},
      () => {}
    );
  }
}
