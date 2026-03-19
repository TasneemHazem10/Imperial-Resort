import { useState } from "react";
import { BookingContext } from "./BookingContext";

export function BookingProvider({ children }) {
  const [bookingRoom, setBookingRoom] = useState(null);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);

  // Calculate nights + total
  const nights =
    checkIn && checkOut
      ? Math.max(
        1,
        Math.ceil(
          (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)
        )
      )
      : 0;

  const total = bookingRoom ? nights * bookingRoom.price : 0;

  return (
    <BookingContext.Provider
      value={{
        bookingRoom,
        setBookingRoom,
        checkIn,
        setCheckIn,
        checkOut,
        setCheckOut,
        adults,
        setAdults,
        kids,
        setKids,
        nights,
        total,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}
