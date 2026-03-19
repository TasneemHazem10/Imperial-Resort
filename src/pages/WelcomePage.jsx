

import { useState } from 'react';

function WelcomePage({ user, onLogout, onContact, onGoToLogin, onGoToSignup, onGoToHome }) {
  const [showDetails, setShowDetails] = useState(false);


  return (
    <div className="min-h-screen flex items-center justify-center bg-hotel-dark p-4 pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
        }}
      />
      
      <div className="relative z-10 w-full max-w-2xl">
        
        <div className="bg-hotel-charcoal/90 backdrop-blur-sm rounded-2xl p-12 shadow-2xl border border-hotel-gold/20 text-center">
          
          
          
          {/* Welcome Title */}
          <h1 className="text-4xl font-serif text-hotel-gold mb-4">
            Welcome {user ? `${user.username}` : 'Guest'} to Imperial Resort Hotel!
          </h1>
          
          {/* Welcome Message */}
          <p className="text-gray-300 text-lg mb-2">
            Thank you for joining us
          </p>
          <p className="text-gray-400 mb-8">
            We look forward to providing you with an unforgettable experience.
          </p>

         
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {user ? (
              <>
                <button
                  onClick={onGoToHome}
                  className="px-8 py-3 bg-hotel-gold text-hotel-dark font-semibold rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-hotel-gold focus:ring-offset-2 focus:ring-offset-hotel-charcoal transition-all duration-300"
                >
                  Explore Resort
                </button>
                <button
                  onClick={onContact}
                  className="px-8 py-3 border-2 border-hotel-gold text-hotel-gold font-semibold rounded-lg hover:bg-hotel-gold/10 focus:outline-none focus:ring-2 focus:ring-hotel-gold focus:ring-offset-2 focus:ring-offset-hotel-charcoal transition-all duration-300"
                >
                  Contact Us
                </button>
                
                <button
                  onClick={onLogout}
                  className="px-8 py-3 border-2 border-hotel-gold text-hotel-gold font-semibold rounded-lg hover:bg-hotel-gold/10 focus:outline-none focus:ring-2 focus:ring-hotel-gold focus:ring-offset-2 focus:ring-offset-hotel-charcoal transition-all duration-300"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={onGoToLogin}
                  className="px-8 py-3 bg-hotel-gold text-hotel-dark font-semibold rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-hotel-gold focus:ring-offset-2 focus:ring-offset-hotel-charcoal transition-all"
                >
                  Login
                </button>
                
                <button
                  onClick={onGoToSignup}
                  className="px-8 py-3 border-2 border-hotel-gold text-hotel-gold font-semibold rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-hotel-gold focus:ring-offset-2 focus:ring-offset-hotel-charcoal transition-all"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
