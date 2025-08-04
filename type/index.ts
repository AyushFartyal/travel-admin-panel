export type BookingStatus = "confirmed" | "cancelled" | "completed" | "pending";

export type Traveler = {
  name: string;
  age: number;
  passport?: string;
};

export type Booking = {
  id: string;
  bookingId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  tourName: string;
  startDate: string;
  endDate: string;
  status: BookingStatus;
  paymentStatus: "paid" | "pending" | "refunded";
  totalAmount: number;
  travelers: Traveler[];
  specialRequests?: string;
};