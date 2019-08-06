import { Component, OnInit, Input } from '@angular/core';
import { OnChanges, SimpleChange  } from '@angular/core';

import { IBooking, ITable }         from '../../models/booking.interface';

@Component({
  selector: 'bc-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit, OnChanges {
  @Input() data: IBooking[];

  table: ITable = {
    columnTitles: ["ID", "Booking Type", "From", "To"],
    props: ["id", "type", "startDateFormatted", "endDateFormatted"],
    data: []
  };

  constructor() { }

  ngOnInit() {
    console.log("TableViewComponent - ngOnInit: ", this.data);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log("TableViewComponent - ngOnChanges: ", changes);

    if(this.data) {
      this.sortBookings(this.data);
    }
  }

  onTableRow() {
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
