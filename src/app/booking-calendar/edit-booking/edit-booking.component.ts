import { Component, OnInit } from '@angular/core';
import { BsModalRef }        from 'ngx-bootstrap/modal';

import * as moment           from 'moment';

@Component({
  selector: 'bc-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.scss']
})
export class EditBookingComponent implements OnInit {
  mode: any;
  booking: any;
  showDeleteConfirmation: boolean = false;

  constructor(public modalRef: BsModalRef) { }

  ngOnInit() {
    console.log('booking: ', this.booking);
  }

  saveBooking() {
    console.log('EditBookingComponent - saveBooking: ', this.booking);
  }

  deleteBooking() {
    console.log('EditBookingComponent - deleteBooking: ', this.booking);
  }

  mom(d) {
    return moment(d).format("D MMM YYYY");
  }
}
