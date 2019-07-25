import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

import { Booking, Table } from './../booking.model';
import { DateFormats }    from '../../utils/date';

@Component({
  selector: 'bc-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {
  @Input() data: Booking[];

  table: Table = {
    columnTitles: ["ID", "Booking Type", "From", "To"],
    props: ["id", "type", "startDateFormatted", "endDateFormatted"],
    data: []
  };

  constructor() { }

  ngOnInit() {
    this.sortBookings(this.data);
  }

  onTableRow() {
  }

  sortBookings(bookings: Booking[]) {
    bookings.sort((a,b) => {
      return a.startDate.getTime() - b.startDate.getTime();
    });

    for (let i=0; i<bookings.length; i++) {
      this.table.data.push(bookings[i]);
    }
  }
}
