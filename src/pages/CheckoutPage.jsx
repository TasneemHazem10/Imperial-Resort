import { useContext, useState, useEffect } from "react";
import { BookingContext } from "../data/BookingContext";
import Lottie from "lottie-react";
import goldParticles from "../assets/Confetti Burst.json";

export default function CheckoutPage({ onBack }) {
  const { bookingRoom, checkIn, checkOut, adults, kids, total } = useContext(BookingContext);
  const [showParticles, setShowParticles] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  // Auto-hide particles + message after 2 seconds
  useEffect(() => {
    if (showParticles || showMessage) {
      const timer = setTimeout(() => {
        setShowParticles(false);
        setShowMessage(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showParticles, showMessage]);

  return (
    <div className="relative min-h-screen bg-[#0f0f0f] text-[#f5f5dc]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover blur-md"
      >
        <source src="/resort.mp4" type="video/mp4" />
      </video>

      {/*dark overlay*/}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-4xl mx-auto p-10">
        <div className="bg-[#1a1a1a]/70 backdrop-blur-md p-10 rounded-2xl shadow-2xl border border-[#d4af37]/20">
          <h1 className="text-3xl font-serif text-[#d4af37] mb-8">Checkout</h1>

          {/*text + Video side by side */}
          <div className="flex gap-6 items-start mb-10">
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-4">Your Stay</h2>
              <p>Room: {bookingRoom ? bookingRoom.name : "Not selected"}</p>
              <p>Check-In: {checkIn || "Not set"}</p>
              <p>Check-Out: {checkOut || "Not set"}</p>
              <p>Guests: {adults} Adults, {kids} Kids</p>
              <p className="mt-2 text-[#d4af37] font-semibold">Total: ${total}</p>
            </div>

            {/*Mini*/}
            <div className="w-80 rounded-lg overflow-hidden shadow-md">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-40 object-cover"
              >
                <source src="/mini.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/*Buttons*/}
          <div className="flex justify-between mt-6">
            <button
              onClick={onBack}
              className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
            >
              ← Back
            </button>
            <button
              onClick={() => {
                setShowParticles(true);
                setShowMessage(true);
              }}
              className="px-6 py-3 bg-[#d4af37] text-black font-semibold rounded-lg hover:bg-yellow-500 transition"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>

      {/* Gold particles animation, not working */}
      {showParticles && (
        <div className="absolute inset-0 z-20 pointer-events-none">
          <Lottie animationData={goldParticles} loop={false} />
        </div>
      )}

      {/* Success message popup, not working */}
      {showMessage && (
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="bg-[#1a1a1a]/90 backdrop-blur-md px-8 py-6 rounded-xl shadow-2xl border border-[#d4af37] text-center animate-fadeIn">
            <h2 className="text-2xl font-serif text-[#d4af37] mb-2">Booking Confirmed!</h2>
            <p className="text-lg">🎉 Your reservation has been successfully saved.</p>
          </div>
        </div>
      )}
    </div>
  );
}
