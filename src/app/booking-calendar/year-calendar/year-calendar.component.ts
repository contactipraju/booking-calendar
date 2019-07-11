import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// TODO: Review this when the issue (https://github.com/year-calendar/js-year-calendar/issues/6) is resolved
// and get rid of the library and import it from the library under node_modules/js-year-calendar
// import Calendar from "js-year-calendar"; // Ideal usage, once issue resolves
import Calendar from "../../../lib/js-year-calendar/js-year-calendar";  // Temporary solution

@Component({
  selector: 'bc-year-calendar',
  templateUrl: './year-calendar.component.html',
  styleUrls: ['./year-calendar.component.scss']
})
export class YearCalendarComponent implements OnInit {
  @Input() data: any;
  @Output() emitter = new EventEmitter<object>();

  calendar: any;
  options:any = {};

  constructor() {
  }

  ngOnInit() {
    console.log("year-calendar - ngOnInit: ", this.data);

    const emit = (from, to) => {
      this.emitter.emit({startDate: from, endDate: to});
    }

    this.options = {
      style: 'background',
      dataSource: this.data,

      enableRangeSelection: true,
      roundRangeLimits: true,

      selectRange: function(e) {
        emit(e.startDate, e.endDate);
      },

      clickDay: function(e) {
        // found clickDay as a redundant event, selectRange is fired when clicked
        // emit(e.date, e.date);
      }
    }

    this.calendar = new Calendar('#calendar', this.options);
  }
}
