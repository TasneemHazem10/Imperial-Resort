export default function RoomListings({ setCurrentPage }) {
  return (
    <div className="grid gap-6 p-10 bg-[#0f0f0f] text-[#f5f5dc]">
      {/* Deluxe Room */}
      <div
        onClick={() => setCurrentPage("deluxe-room")}
        className="cursor-pointer bg-[#1a1a1a]/70 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-[#d4af37]/20 hover:border-[#d4af37] transition-all"
      >
        <h2 className="text-2xl font-serif text-[#d4af37]">Deluxe Room</h2>
        <p className="text-gray-300">A spacious room with a king-size bed, modern amenities, and a stunning city view.</p>
        <p className="text-[#d4af37] font-bold mt-2">$850 / night</p>
      </div>

      {/* Sea-View Room */}
      <div
        onClick={() => setCurrentPage("sea-view-room")}
        className="cursor-pointer bg-[#1a1a1a]/70 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-[#d4af37]/20 hover:border-[#d4af37] transition-all"
      >
        <h2 className="text-2xl font-serif text-[#d4af37]">Double Sea-View Room</h2>
        <p className="text-gray-300">A delightful room with a double bed, modern amenities, and a stunning sea view.</p>
        <p className="text-[#d4af37] font-bold mt-2">$900 / night</p>
      </div>

      {/* Double Room */}
      <div
        onClick={() => setCurrentPage("double-room")}
        className="cursor-pointer bg-[#1a1a1a]/70 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-[#d4af37]/20 hover:border-[#d4af37] transition-all"
      >
        <h2 className="text-2xl font-serif text-[#d4af37]">Double Room</h2>
        <p className="text-gray-300">A cozy room with a double bed, modern amenities, and a serene environment.</p>
        <p className="text-[#d4af37] font-bold mt-2">$950 / night</p>
      </div>
    </div>
  );
}
