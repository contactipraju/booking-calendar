import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { DateFormats } from '../../utils/date';

@Component({
  selector: 'bc-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {
  @Input() data: any;

  table:any = {
    columnTitles: ["ID", "Booking Type", "From", "To"],
    props: ["id", "type", "startDateFormatted", "endDateFormatted"],
    data: []
  };

  constructor() { }

  ngOnInit() {
    this.sortBookings(this.data);
  }

  formattedDate = (date) => {
    return moment(date).format("D MMM YYYY");
  }

  onTableRow() {
  }

  sortBookings(bookings) {
    bookings.sort((a,b) => {
      return a.from - b.from;
    });

    for (let i=0; i<bookings.length; i++) {
      this.table.data.push(bookings[i]);
    }
  }
}
