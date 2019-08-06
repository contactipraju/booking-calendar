import { Component, OnInit } from '@angular/core';
import { BsModalRef }        from 'ngx-bootstrap/modal';

import { Store, select }      from '@ngrx/store';
import { IAppState }          from './../../store/state/app.state';
import { DeleteBooking }      from './../../store/actions/booking.actions';

import * as moment           from 'moment';
import { Notifications }     from '../../utils/notifications';
import { IBooking }          from 'src/app/models/booking.interface';

@Component({
  selector: 'bc-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.scss']
})
export class EditBookingComponent implements OnInit {
  mode: string;
  booking: IBooking;
  showDeleteConfirmation: boolean = false;

  bookingTypes: string[] = [
    "Holiday",
    "Time Off",
    "Doctor",
    "School Holidays",
    "Christmas Break",
    "Vacation"
  ];

  constructor(
    private _store: Store<IAppState>,
    public modalRef: BsModalRef
  ) { }

  ngOnInit() {
    console.log('EditBookingComponent - ngOnInit: ', this.booking);
  }

  saveBooking() {
    console.log('EditBookingComponent - saveBooking: ', this.booking);

    //if present.. startDateInputFormat and endDateInputFormat have the modified dates

    //Notifications.showSuccessNotification(this.mode === 'create'? "Booking created successfully" : "Booking updated successfully");
    //Notifications.showErrorNotification(this.mode === 'create'? "Booking created failed" : "Booking update failed");

    this.modalRef.hide();
  }

  deleteBooking() {
    console.log('EditBookingComponent - deleteBooking: ', this.booking);
    this._store.dispatch(new DeleteBooking(this.booking.id));

    //Notifications.showSuccessNotification("Booking deleted successfully");
    //Notifications.showErrorNotification("Booking deletion failed");

    this.modalRef.hide();
  }

  mom(d) {
    return moment(d).format("D MMM YYYY");
  }
}
