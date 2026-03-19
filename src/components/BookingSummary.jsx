import { useNavigate } from "react-router-dom";

export default function BookingSummary({ room, checkIn, checkOut, adults, kids }) {
  const navigate = useNavigate();

  // Calculate nights
  const nights =
    checkIn && checkOut
      ? Math.max(
        1,
        Math.ceil(
          (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)
        )
      )
      : 0;

  const total = nights * room.price;

  return (
    <aside className="bg-[#1a1a1a]/70 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-[#d4af37]/20">
      <h3 className="text-xl font-serif text-[#d4af37] mb-6">Your Booking</h3>

      {/*Dates*/}
      <p className="text-gray-300">
        Check‑In: {checkIn || "Select date"}
      </p>
      <p className="text-gray-300 mb-4">
        Check‑Out: {checkOut || "Select date"}
      </p>

      {/*guests*/}
      <p className="text-gray-300 mb-6">
        Guests: {adults} Adults, {kids} Kids
      </p>

      {/*Price*/}
      <div className="border-t border-[#d4af37]/20 pt-4 mb-6">
        <p className="text-gray-400">Price per night: ${room.price}</p>
        <p className="text-gray-400">Nights: {nights}</p>
        <p className="text-gray-400 font-semibold text-[#d4af37]">
          Total: ${total}
        </p>
      </div>

      <button
        onClick={() => navigate('/checkout')}
        className="w-full py-3 px-4 bg-[#d4af37] text-black font-semibold rounded-lg hover:bg-yellow-500 transition-all duration-300"
      >
        Proceed to Checkout →
      </button>

    </aside>
  );
}
