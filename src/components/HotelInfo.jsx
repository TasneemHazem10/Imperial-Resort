export default function HotelInfo({ room }) {
  return (
    <section className="bg-[#1a1a1a]/70 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-[#d4af37]/20">
      <h1 className="text-4xl font-serif text-[#d4af37] mb-4">{room.name}</h1>
      <p className="text-gray-300 mb-6">{room.location} • ⭐ {room.rating}</p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {room.images.map((img, i) => (
          <img key={i} src={img} alt={`${room.name} ${i}`} className="rounded-lg object-cover h-48 w-full" />
        ))}
      </div>

      <p className="text-gray-400 leading-relaxed">{room.description}</p>
    </section>
  );
}
