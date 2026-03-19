import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BookingContext } from "../data/BookingContext";
import HotelInfo from "../components/HotelInfo";
import RoomDetails from "../components/RoomDetails";
import BookingSummary from "../components/BookingSummary";

export default function BookingDetailsPage({ room: roomProp }) {
  const navigate = useNavigate();
  const location = useLocation();
  const room = roomProp || location.state?.room;

  const {
    setBookingRoom,
    checkIn, setCheckIn,
    checkOut, setCheckOut,
    adults, setAdults,
    kids, setKids
  } = useContext(BookingContext);

  useEffect(() => {
    if (room) {
      setBookingRoom(room);
    }
  }, [room, setBookingRoom]);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] text-[#f5f5dc]">
        <div className="text-center">
          <p className="text-2xl font-semibold mb-4">Room not found</p>
          <p className="text-sm text-gray-300 mb-6">Please select a room from the search results.</p>
          <button
            onClick={() => navigate('/search-results')}
            className="px-6 py-3 bg-[#d4af37] text-black font-semibold rounded-lg hover:bg-yellow-500"
          >
            Back to Search Results
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f5f5dc] relative">

      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2070&q=80)",
        }}
      />

      <main className="relative z-10 max-w-7xl mx-auto p-6 md:p-10 grid md:grid-cols-3 gap-10">
        {/*left side*/}
        <div className="md:col-span-2 space-y-10">
          <HotelInfo room={room} />

          <RoomDetails
            room={room}
            checkIn={checkIn}
            setCheckIn={setCheckIn}
            checkOut={checkOut}
            setCheckOut={setCheckOut}
            adults={adults}
            setAdults={setAdults}
            kids={kids}
            setKids={setKids}
          />
        </div>

        {/*right side*/}
        <div className="md:col-span-1">
          <BookingSummary
            room={room}
            checkIn={checkIn}
            checkOut={checkOut}
            adults={adults}
            kids={kids}
          />
          <div className="mt-32 rounded-xl overflow-hidden shadow-lg">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-72 object-cover"
            >
              <source src="/resort.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-96 object-cover"
            >
              <source src="/resort2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

        </div>
      </main>

    </div>
  );
}
