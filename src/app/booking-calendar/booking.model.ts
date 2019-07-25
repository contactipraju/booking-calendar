export interface User {
  id: string;
}

export interface Store {
  user: User;
  bookings: Booking[];
}

export interface Table {
  columnTitles: string[];
  props: string[];
  data: Booking[];
}

export interface Booking {
  id: number;
  startDate: Date;
  endDate: Date;
  type: string;  // Todo: use enum
}

export interface Root {
  bookings: Booking[];
}
