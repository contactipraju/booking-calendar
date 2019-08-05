import { Component, OnInit }          from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { EditBookingComponent}        from '../edit-booking/edit-booking.component';

@Component({
  selector: 'app-multiselect-list',
  templateUrl: './multiselect-list.component.html',
  styleUrls: ['./multiselect-list.component.scss']
})
export class MultiselectListComponent implements OnInit {
  list: any;
  selectedBookingId: number;

  modalRefEdit:  BsModalRef;

  constructor(public modalRef: BsModalRef, private modalService: BsModalService) { }

  ngOnInit() {
    this.selectedBookingId = this.list[0].id;
  }

  getBookingFromId(id) {
    console.log('MultiselectListComponent - getBookingFromId: ', id);

    for(let i=0; i<this.list.length; i++) {
      if(id == this.list[i].id) {
        return this.list[i];
      }
    }

    return null;
  }

  onSelectBooking() {
    console.log('MultiselectListComponent - onSelectBooking: ', this.selectedBookingId);
    let selectedBooking = this.getBookingFromId(this.selectedBookingId);

    if(!selectedBooking) {
      return;
    }

    const initialState = {
      mode: "edit",
      booking: selectedBooking
    };

    this.modalRefEdit = this.modalService.show(EditBookingComponent, { initialState });
    this.modalRefEdit.content.modalRef = this.modalRefEdit;
  }
}
