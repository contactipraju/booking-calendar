import { Component, OnInit, Input }   from '@angular/core';
import { OnChanges, SimpleChange  }   from '@angular/core';
import { TemplateRef, ViewChild   }   from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import * as moment                    from 'moment';
import { EditBookingComponent}        from '../edit-booking/edit-booking.component';

@Component({
  selector: 'bc-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent implements OnInit {
  @Input() data: any;

  bookings: any[];
  selectedBookings: any[];

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    console.log("CalendarViewComponent: ", this.data);
    this.prepareData();
  }

  prepareData() {
    this.bookings = [];

    for(let i=0; i<this.data.length; i++) {
      this.bookings.push({
        id: this.data[i].id,
        type: this.data[i].type,
        startDate: new Date(this.data[i].startDate),
        endDate: new Date(this.data[i].endDate)
      });
    }
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    //console.log("changes: ", changes);
  }

  mom(d) {
    return moment(d).format("D MMM YYYY");
  }

  datesSelected($event) {
  }
}
