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

  modalRef_Multiselect: BsModalRef;
  @ViewChild('multiselect') templateMultiSelect : TemplateRef<any>;

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
    this.findBookingToShow($event);
  }

  findBookingToShow(e) {
    const events = [];
    const event:any = {};

    for (const i in this.bookings) {
      if (this.bookings[i].startDate <= e.endDate && this.bookings[i].endDate >= e.startDate) {
        events.push(this.bookings[i]);
      }
    }

    if (events.length > 1) {
      this.selectedBookings = [];

      for (let i=0; i<events.length; i++) {
        this.selectedBookings.push(events[i]);
      }

      this.viewMultiSelect();
    } else if(events.length == 1) {
      this.editBooking(events[0]);
    }
  }

  viewMultiSelect() {
    this.openModal(this.templateMultiSelect);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef_Multiselect = this.modalService.show(template);
  }

}
