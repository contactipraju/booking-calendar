import { Component, OnInit, Input }   from '@angular/core';
import { OnChanges, SimpleChange  }   from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { EditBookingComponent}        from '../edit-booking/edit-booking.component';

import { IBooking, ITable }         from '../../models/booking.interface';

@Component({
  selector: 'bc-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit, OnChanges {
  @Input() data: IBooking[];
  modalRef_EditBooking: BsModalRef;

  table: ITable = {
    columnTitles: ["ID", "Booking Type", "From", "To"],
    props: ["id", "type", "startDateFormatted", "endDateFormatted"],
    data: []
  };

  constructor(private modalService: BsModalService) {
  }

  ngOnInit() {
    console.log("TableViewComponent - ngOnInit: ", this.data);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log("TableViewComponent - ngOnChanges: ", changes);

    if(this.data) {
      this.sortBookings(this.data);
    }
  }

  bookingSelected(e) {
    const initialState = {
      mode: "edit",
      booking: e
    };

    this.modalRef_EditBooking = this.modalService.show(EditBookingComponent, {initialState});
    this.modalRef_EditBooking.content.modalRef = this.modalRef_EditBooking;
  }

  sortBookings(bookings: IBooking[]) {
    bookings.sort((a,b) => {
      return a.startDate.getTime() - b.startDate.getTime();
    });

    this.table.data = [];
    for (let i=0; i<bookings.length; i++) {
      this.table.data.push(bookings[i]);
    }
  }
}
