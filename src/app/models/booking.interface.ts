export interface IBooking {
  id: number;
  startDate: Date;
  endDate: Date;

  // For displaying in Bookings Table
  startDateFormatted?: string;
  endDateFormatted?: string;

  // For the calendar inputs in edit-calendar
  startDateInputFormat?: string;
  endDateInputFormat?: string;

  type: string;
  comments?: string;
}

export interface ITable {
  columnTitles: string[];
  props: string[];
  data: IBooking[];
}
