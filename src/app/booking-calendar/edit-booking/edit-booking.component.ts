import { Component, OnInit } from '@angular/core';
import { BsModalRef }        from 'ngx-bootstrap/modal';

import * as moment           from 'moment';

@Component({
  selector: 'bc-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.scss']
})
export class EditBookingComponent implements OnInit {
  booking: any;

  constructor() { }

  ngOnInit() {
    console.log('booking: ', this.booking);
  }

  mom(d) {
    return moment(d).format("D MMM YYYY");
  }
}
