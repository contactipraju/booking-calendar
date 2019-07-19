import { Component, OnInit, Input }   from '@angular/core';
import { OnChanges, SimpleChange  }   from '@angular/core';
import { TemplateRef, ViewChild   }   from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import * as moment                    from 'moment';
import { EditBookingComponent}        from '../edit-booking/edit-booking.component';
import { MultiselectListComponent }   from '../multiselect-list/multiselect-list.component';

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
  modalRef_EditBooking: BsModalRef;

  @ViewChild('multiselect') templateMultiSelect : TemplateRef<any>;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    console.log("CalendarViewComponent: ", this.data);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    //console.log("changes: ", changes);
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

      this.viewMultiSelect(this.selectedBookings);
    } else if(events.length == 1) {
      this.editBooking(events[0]);
    }
  }

  viewMultiSelect(bookings) {
    console.log("CalendarBookingsComponent - viewMultiSelect: ", bookings);

    const initialState = {
      list: bookings
    };

    this.modalRef_Multiselect = this.modalService.show(MultiselectListComponent, { initialState });
    this.modalRef_Multiselect.content.modalRef = this.modalRef_Multiselect;
  }

  editBooking(e) {
    const initialState = {
      booking: e
    };

    this.modalRef_EditBooking = this.modalService.show(EditBookingComponent, {initialState});
    this.modalRef_EditBooking.content.modalRef = this.modalRef_EditBooking;
  }
}
