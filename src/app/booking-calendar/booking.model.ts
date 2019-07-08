export interface Bookings {
  id: number;
  startDate: Date;
  endDate: Date;
  type: string;  // Todo: use enum
}

export interface Root {
  bookings: Bookings[];
}
