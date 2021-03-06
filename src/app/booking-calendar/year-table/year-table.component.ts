import { Component, EventEmitter }  from '@angular/core';
import { OnInit, Input, Output }    from '@angular/core';
import { OnChanges, SimpleChange  } from '@angular/core';

import { IBooking } from '../../models/booking.interface';

@Component({
  selector: 'bc-year-table',
  templateUrl: './year-table.component.html',
  styleUrls: ['./year-table.component.scss']
})
export class YearTableComponent implements OnInit, OnChanges {
  @Input() data: any;
  @Output() emitter = new EventEmitter<object>();

  constructor() { }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    //console.log("changes: ", changes);
  }

  ngOnInit() {
    //console.log("YearTableComponent - data: ", this.data);
  }

  selectRow(booking: IBooking) {
    this.emitter.emit(booking);
  }
}
