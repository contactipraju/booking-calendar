export interface IBooking {
  id: number;
  startDate: Date;
  endDate: Date;
  startDateFormatted?: string;
  endDateFormatted?: string;
  type: string;
}

export interface ITable {
  columnTitles: string[];
  props: string[];
  data: IBooking[];
}
