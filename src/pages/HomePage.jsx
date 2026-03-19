import { useState } from 'react';

function HomePage({ onLogout }) {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('adventure');
    const [selectedAccomodation, setSelectedAccomodation] = useState(null);

    const categoryImages = {
        adventure: [
            'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1542359649-31e03cd4d909?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?q=80&w=705&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        wellness: [
            'https://images.unsplash.com/photo-1562751362-404243c2eea3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1675195905377-e78fccd629c9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        dining: [
            'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1574966739987-65e38db0f7ce?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1565895405127-481853366cf8?q=80&w=709&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        transport: [
            'https://images.unsplash.com/photo-1473042904451-00171c69419d?q=80&w=1199&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1676288176918-232f7caadfee?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ]
    };

    const accomodationDesc = {
        adventure: [
            ["Adventure Accommodation 1", "This is a description for the adventure accommodation 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],
            ["Adventure Accommodation 2", "This is a description for the adventure accommodation 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],
            ["Adventure Accommodation 3", "This is a description for the adventure accommodation 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]
        ],
        wellness: [
            ["Wellness Accommodation 1", "This is a description for the wellness accommodation 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],
            ["Wellness Accommodation 2", "This is a description for the wellness accommodation 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],
            ["Wellness Accommodation 3", "This is a description for the wellness accommodation 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]
        ],
        dining: [
            ["Dining Accommodation 1", "This is a description for the dining accommodation 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],
            ["Dining Accommodation 2", "This is a description for the dining accommodation 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],
            ["Dining Accommodation 3", "This is a description for the dining accommodation 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]
        ],
        transport: [
            ["Transport Accommodation 1", "This is a description for the transport accommodation 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],
            ["Transport Accommodation 2", "This is a description for the transport accommodation 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],
            ["Transport Accommodation 3", "This is a description for the transport accommodation 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]
        ]
    };
    const handleLogout = () => {
        setIsLoading(true);
        setTimeout(() => {
            onLogout();
            setIsLoading(false);
        }, 1000);
    };
    return (
        <div className="min-h-screen bg-hotel-dark p-4 pt-20">
            <div className="bg-[url(https://images.unsplash.com/photo-1548324256-4761023b0237?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] absolute inset-0 bg-cover bg-center opacity-20" />
            <div className="relative z-10 w-full max-w-10xl text-center text-hotel-cream pt-80 pb-20">
                <div className="flex-wrap w-full items-center justify-center gap-8 mb-8 max-w-7xl mx-auto">
                    <form className="bg-hotel-dark/80 backdrop-blur-md p-8 rounded-lg shadow-lg">
                        <div className="flex flex-wrap gap-20 mb-4">
                            <div className="flex-1 w-full mb-6 text-1xl font-serif text-hotel-gold tracking-wider">
                                <p>DATE</p>
                                <input type="date" className="w-full p-2 rounded-md bg-hotel-dark/50 text-hotel-cream focus:outline-none focus:ring-2 focus:ring-hotel-gold" />
                            </div>
                            <div className="flex-1 mb-6 text-1xl font-serif text-hotel-gold tracking-wider">
                                <p>TYPE</p>
                                <select className="p-2 w-full rounded-md bg-hotel-dark/50 text-hotel-cream focus:outline-none focus:ring-2 focus:ring-hotel-gold">
                                    <option value="">Select Room Type</option>
                                    <option value="standard">Standard Room</option>
                                    <option value="deluxe">Deluxe Room</option>
                                    <option value="suite">Suite</option>
                                    <option value="presidential">Presidential Suite</option>
                                    <option value="apartment">Apartment</option>
                                    <option value="villa">Villa</option>
                                    <option value="penthouse">Penthouse</option>
                                    <option value="bungalow">Bungalow</option>
                                </select>
                            </div>
                            <div className="flex-1 w-full mb-6 text-1xl font-serif text-hotel-gold tracking-wider">
                                <p>GUESTS</p>
                                <input defaultValue="0" type="number" min="0" className="w-full p-2 rounded-md bg-hotel-dark/50 text-hotel-cream focus:outline-none focus:ring-2 focus:ring-hotel-gold" />
                            </div>
                            <button type="submit" className="flex-1 mb-6 mt-4 py-2 bg-hotel-gold text-hotel-dark rounded-md hover:bg-hotel-gold/90 transition-colors" /*onClick={ Navigate to booking results}*/>
                                Booking &nbsp; &nbsp; &gt;
                            </button>
                        </div>

                    </form>
                </div>
            </div>
            <div className=" text-center text-sm text-gray-400 mt-20">
                <div>
                    <p className="text-4xl font-serif text-white mb-4"> A Luxury Experience, brought to you by Imperial Resort.</p>
                </div>
                <div className="flex items-center justify-center gap-6 mt-4">
                    <button onClick={() => setSelectedCategory('adventure')} className={`px-10 py-2 rounded-md transition-colors ${selectedCategory === 'adventure' ? 'bg-hotel-gold text-hotel-dark' : 'bg-hotel-dark text-hotel-gold border-2 border-hotel-gold hover:bg-hotel-gold/20'}`}>
                        Adventure
                    </button>
                    <button onClick={() => setSelectedCategory('wellness')} className={`px-10 py-2 rounded-md transition-colors ${selectedCategory === 'wellness' ? 'bg-hotel-gold text-hotel-dark' : 'bg-hotel-dark text-hotel-gold border-2 border-hotel-gold hover:bg-hotel-gold/20'}`}>
                        Wellness
                    </button>
                    <button onClick={() => setSelectedCategory('dining')} className={`px-10 py-2 rounded-md transition-colors ${selectedCategory === 'dining' ? 'bg-hotel-gold text-hotel-dark' : 'bg-hotel-dark text-hotel-gold border-2 border-hotel-gold hover:bg-hotel-gold/20'}`}>
                        Dining
                    </button>
                    <button onClick={() => setSelectedCategory('transport')} className={`px-10 py-2 rounded-md transition-colors ${selectedCategory === 'transport' ? 'bg-hotel-gold text-hotel-dark' : 'bg-hotel-dark text-hotel-gold border-2 border-hotel-gold hover:bg-hotel-gold/20'}`}>
                        Arrival & Transport
                    </button>

                </div>
                <div className="flex items-center justify-center gap-4 mt-4">
                    {categoryImages[selectedCategory].map((src, index) => (
                        <img key={index} className="flex max-h-[400px] aspect-square object-cover hover:aspect-video transition-discrete duration-700 rounded-lg cursor-pointer" src={src} alt={`${selectedCategory} ${index + 1}`} onClick={() => setSelectedAccomodation(index)} />
                    ))}
                </div>

                {selectedAccomodation !== null ? (
                    <div className="flex mt-8 bg-white/5 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-6xl h-8xl mx-auto">
                        <div className="items-center justify-center mb-6">
                            <h3 className="text-2xl mr-4 font-serif text-hotel-gold mb-4">{accomodationDesc[selectedCategory][selectedAccomodation][0]}</h3>
                            <p className="text-hotel-cream mr-4">{accomodationDesc[selectedCategory][selectedAccomodation][1]}</p>
                            <button className="mt-20 mr-4 px-6 py-2 bg-hotel-gold text-hotel-dark rounded-md hover:bg-hotel-gold/90 transition-colors">
                                Book Now
                            </button>
                        </div>
                        <div className="flex items-center justify-center">
                            {categoryImages[selectedCategory][selectedAccomodation] && (
                                <img key={selectedAccomodation} className="flex aspect-square object-cover hover:scale-105 transition-discrete duration-700 rounded-lg cursor-pointer" src={categoryImages[selectedCategory][selectedAccomodation]} alt={`${selectedCategory} ${selectedAccomodation + 1}`} onClick={() => setSelectedAccomodation(selectedAccomodation)} />
                            )}
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}
export default HomePage;