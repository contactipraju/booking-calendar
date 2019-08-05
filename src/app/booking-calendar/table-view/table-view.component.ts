import { Component, OnInit, Input } from '@angular/core';
import { OnChanges, SimpleChange  } from '@angular/core';

import { Booking, Table } from './../booking.model';

@Component({
  selector: 'bc-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnChanges {
  @Input() data: Booking[];

  table: Table = {
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

  sortBookings(bookings: Booking[]) {
    bookings.sort((a,b) => {
      return a.startDate.getTime() - b.startDate.getTime();
    });

    this.table.data = [];
    for (let i=0; i<bookings.length; i++) {
      this.table.data.push(bookings[i]);
    }
  }
}
