export default function RoomDetails({
  room,
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut,
  adults,
  setAdults,
  kids,
  setKids
}) {
  return (
    <section className="bg-[#1a1a1a]/70 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-[#d4af37]/20">
      
      {/* Title */}
      <h2 className="text-2xl font-serif text-[#d4af37] mb-4">{room.name}</h2>
      <p className="text-gray-300 mb-6">
        Sleeps {room.guests} • {room.bed} • {room.view}
      </p>

      {/* Amenities */}
      <ul className="space-y-2 text-gray-400 mb-6">
        {room.amenities.map((a, i) => (
          <li key={i}>✔ {a}</li>
        ))}
      </ul>

      {/* Check‑In */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-[#f5f5dc] mb-2">
          Check‑In
        </label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="w-full px-4 py-3 bg-[#0f0f0f]/50 border border-gray-600 rounded-lg text-[#f5f5dc] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37] transition-all duration-300"
        />
      </div>

      {/* Check‑Out */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-[#f5f5dc] mb-2">
          Check‑Out
        </label>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="w-full px-4 py-3 bg-[#0f0f0f]/50 border border-gray-600 rounded-lg text-[#f5f5dc] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37] transition-all duration-300"
        />
      </div>

      {/* Adults */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-[#f5f5dc] mb-2">
          Adults
        </label>
        <input
          type="number"
          min="1"
          value={adults}
          onChange={(e) => setAdults(Number(e.target.value))}
          className="w-full px-4 py-3 bg-[#0f0f0f]/50 border border-gray-600 rounded-lg text-[#f5f5dc] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37] transition-all duration-300"
        />
      </div>

      {/* Kids */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-[#f5f5dc] mb-2">
          Kids
        </label>
        <input
          type="number"
          min="0"
          value={kids}
          onChange={(e) => setKids(Number(e.target.value))}
          className="w-full px-4 py-3 bg-[#0f0f0f]/50 border border-gray-600 rounded-lg text-[#f5f5dc] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37] transition-all duration-300"
        />
      </div>

      {/* Price */}
      <p className="text-xl font-bold text-[#d4af37]">
        ${room.price} / night
      </p>
    </section>
  );
}
