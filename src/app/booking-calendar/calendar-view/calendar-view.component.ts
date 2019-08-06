import { Component, OnInit, Input }   from '@angular/core';
import { OnChanges, SimpleChange  }   from '@angular/core';
import { TemplateRef, ViewChild   }   from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { IBooking }                   from '../../models/booking.interface';

import { EditBookingComponent}        from '../edit-booking/edit-booking.component';
import { MultiselectListComponent }   from '../multiselect-list/multiselect-list.component';

@Component({
  selector: 'bc-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent implements OnInit, OnChanges {
  @Input() bookings: IBooking[];

  selectedBookings: IBooking[];

  modalRef_Multiselect: BsModalRef;
  modalRef_EditBooking: BsModalRef;

  @ViewChild('multiselect') templateMultiSelect : TemplateRef<any>;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    console.log("CalendarViewComponent - ngOnInit: ", this.bookings);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log("CalendarViewComponent - ngOnChanges: ", changes);
  }

  datesSelected($event) {
    this.findBookingToShow($event);
  }

  findBookingToShow(e) {
    const events = [];

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
    }
    else if(events.length == 1) {
      this.editBooking(events[0]);
    }
    else {
      this.createBooking(e);
    }
  }

  viewMultiSelect(bookings: IBooking[]) {
    console.log("CalendarViewComponent - viewMultiSelect: ", bookings);

    const initialState = {
      list: bookings
    };

    this.modalRef_Multiselect = this.modalService.show(MultiselectListComponent, { initialState });
    this.modalRef_Multiselect.content.modalRef = this.modalRef_Multiselect;
  }

  createBooking(e) {
    console.log("CalendarViewComponent - createBooking: ", e);

    const initialState = {
      mode: "create",
      booking: {
        startDate: e.startDate,
        endDate: e.endDate
      }
    };

    this.modalRef_EditBooking = this.modalService.show(EditBookingComponent, { initialState });
    this.modalRef_EditBooking.content.modalRef = this.modalRef_EditBooking;
  }

  editBooking(e) {
    console.log("CalendarViewComponent - editBooking: ", e);

    const initialState = {
      mode: "edit",
      booking: e
    };

    this.modalRef_EditBooking = this.modalService.show(EditBookingComponent, {initialState});
    this.modalRef_EditBooking.content.modalRef = this.modalRef_EditBooking;
  }
}
