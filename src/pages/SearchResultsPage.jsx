import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';

const Rooms = [
  { id: 1, name: 'Deluxe Room', guests: 4, price: 850, availableDates: ['2026-04-03', '2026-04-01', '2026-05-01'], image: "/Deluxe.jpeg", description: 'A spacious room with a king-size bed, modern amenities, and a stunning city view.', rating: 4.8 },
  { id: 2, name: 'Suite', guests: 2, price: 650, availableDates: ['2026-05-01', '2026-04-05', '2026-05-09'], image: "/suite.jpg", description: 'A luxurious room with a king-size bed, premium amenities, and a beautiful city view.', rating: 4.6 },
  { id: 3, name: 'Single Room', guests: 1, price: 300, availableDates: ['2026-04-22', '2026-04-23', '2026-04-24'], image: "/Single.jpg", description: 'A comfortable room with a single bed, basic amenities, and a peaceful atmosphere.', rating: 4.2 },
  { id: 4, name: 'Double Room', guests: 2, price: 450, availableDates: ['2026-04-13', '2026-04-26', '2026-04-28'], image: "/Double.jpeg", description: 'A cozy room with a double bed, modern amenities, and a serene environment.', rating: 4.4 },
  { id: 5, name: 'Connected room', guests: 4, price: 1200, availableDates: ['2026-04-01', '2026-04-07', '2026-04-09'], image: "/Connecting_room.jpeg", description: 'A spacious room with a king-size bed, separate living area, and breathtaking views.', rating: 4.9 },
  { id: 6, name: 'Double-seaView Room', guests: 2, price: 900, availableDates: ['2026-04-26', '2026-04-27'], image: "/sea_view.jpg", description: 'A delightful room with a double bed, modern amenities, and a stunning sea view.', rating: 4.7 },
  { id: 7, name: 'Triple Room', guests: 3, price: 550, availableDates: ['2026-03-08', '2026-04-09', '2026-05-03'], image: "/Triple.jpeg", description: 'A comfortable room with three beds, modern amenities, and a relaxing atmosphere.', rating: 4.3 }
]

function RoomRow({ room, onBook }) {
  return (
    <div className="border-b border-white/8 p-6 hover:bg-white/2 transition-colors cursor-pointer" onClick={onBook}>
      <div className="flex items-center gap-6">
        <img src={room.image} alt={room.name} className="w-20 h-20 object-cover rounded" />
        <div className="flex-1">
          <h3 className="font-serif text-xl font-semibold">{room.name}</h3>
          <p className="text-taupe-400 text-sm">${room.price} / night</p>
          <p className="text-[#d1cece] text-xs">Rating: {room.rating} | Guests: {room.guests}</p>
          <p className="text-neutral-400 text-xs mt-1">{room.description}</p>
        </div>
      </div>
    </div>
  )
}

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const date = searchParams.get('date');
  const type = searchParams.get('type');
  const guests = Number(searchParams.get('guests'));


  const [sortBy, setSortBy] = useState('price-asc')
  const [maxPrice, setMaxPrice] = useState(1500)
  const [filterRooms, setFilterRooms] = useState(false)
  const navigate = useNavigate()

  const visibleRooms = Rooms
    .filter(room => {
      const matchesType = type ? room.name.toLowerCase().includes(type.toLowerCase()) : true;
      const matchesGuests = guests ? room.guests >= guests : true;
      const matchesDate = date ? room.availableDates.includes(date) : true;
      const matchesPrice = room.price <= maxPrice;

      return matchesType && matchesGuests && matchesDate && matchesPrice;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') {
        return a.price - b.price
      } else if (sortBy === 'price-desc') {
        return b.price - a.price

      }
      return 0
    })

  return (
    <div className="min-h-screen bg-[#161614] text-white font-sans">

      <div className="relative h-72 overflow-hidden">

        <img src="/resort.jpg" alt="resort" className="w-full h-full object-cover opacity-60"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#161614]/40 to-[#161614]" />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-serif text-5xl font-semibold tracking-tight">Select a Room</h1>
        </div>
      </div>

      <div className="flex border-t border-b border-white/8">
        <button
          onClick={() => setSortBy(p => p === 'price-desc' ? 'price-asc' : 'price-desc')}
          className="flex items-center gap-2 border-r border-white/8 px-5 py-3 text-[11px] tracking-[2px] uppercase text-gray-400 ] hover:text-white hover:bg-white/4 transition-colors"
        >
          Sort by Price
          <strong className="text-[#d3d3d3] font-medium">
            {sortBy === 'price-desc' ? 'Highest Price' : 'Lowest Price'}
          </strong>
          <span className="text-[9px]"></span>
        </button>

        <button
          onClick={() => setFilterRooms(prev => !prev)}
          className="flex items-center gap-2 border-r border-white/8 px-5 py-3 text-[10px] tracking-[2px] uppercase text-gray-600 hover:text-[#ccc] hover:bg-white/4 transition-colors"
        >
          Filter <span className="text-[9px]"></span>
        </button>

        <div className="ml-auto px-5 py-3 text-[10px] tracking-[2px] uppercase text-neutral-700">
          {visibleRooms.length} room{visibleRooms.length !== 1 ? 's' : ''}
        </div>
      </div>

      {filterRooms && (
        <div className="flex items-center gap-8 border-b border-white/8 bg-white/1.5 px-6 py-4">
          <span className="text-[9px] tracking-[3px] uppercase text-[#555]">
            Max price / night
          </span>
          <input
            type="range"
            min={200} max={1500} step={50}
            value={maxPrice}
            onChange={e => setMaxPrice(Number(e.target.value))}
            className="w-48 accent-gray-600"
          />
          <span className="text-sm text-[#ccc]">${maxPrice}</span>
          <span className="text-[10px] text-[#444]">drag to filter</span>
        </div>
      )}

      <div className="mb-16 max-w-5xl mx-auto">
        {visibleRooms.length === 0 && (
          <div className="py-20 text-center">
            <p className="font-serif text-3xl text-[#444]">No rooms available</p>
            <p className="mt-2 text-[10px] tracking-[3px] uppercase text-[#333]">
              Try adjusting your price filter
            </p>
          </div>
        )}

        {visibleRooms.map(room => (
          <RoomRow
            key={room.id}
            room={room}
            onBook={() => {
              const roomRouteMap = {
                'Deluxe Room': '/deluxe-room',
                'Double Room': '/double-room',
                'Double-seaView Room': '/sea-view-room',
              };
              const route = roomRouteMap[room.name];
              if (route) {
                navigate(route);
              } else {
                navigate('/booking', { state: { room } });
              }
            }}
          />
        ))}
      </div>
    </div>

  )
}
