import { Component, OnInit, Input } from '@angular/core';
import { OnChanges, SimpleChange  } from '@angular/core';

@Component({
  selector: 'bc-year-table',
  templateUrl: './year-table.component.html',
  styleUrls: ['./year-table.component.scss']
})
export class YearTableComponent implements OnInit, OnChanges {
  @Input() data: any;

  constructor() { }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    //console.log("changes: ", changes);
  }

  ngOnInit() {
    //console.log("YearTableComponent - data: ", this.data);
  }
}
