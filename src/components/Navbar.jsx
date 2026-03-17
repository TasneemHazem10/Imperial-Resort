import { useState } from "react";

function Navbar({ isLoggedIn, onLogout, currentPage, setCurrentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  const handleLogoutClick = () => {
    onLogout();
    setIsMenuOpen(false);
  };

  const hoverStyle =
    "hover:text-gray-300 hover:bg-gray-500/10 transition-colors";

  return (
    <nav className="bg-hotel-dark/95 backdrop-blur-md border-b border-hotel-gold/20 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1
              onClick={() => handleNavigation(isLoggedIn ? "welcome" : "login")}
              className="text-2xl font-serif text-hotel-gold tracking-wider cursor-pointer hover:text-gray-300 transition-colors"
            >
              Imperial Resort
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">

              {isLoggedIn ? (
                <>
                  <button
                    onClick={() => handleNavigation("welcome")}
                    className={`px-3 py-2 rounded-md text-sm font-medium
                    ${currentPage === "welcome"
                        ? "text-hotel-white bg-hotel-gold/10"
                        : `text-hotel-cream ${hoverStyle}`}`}
                  >
                    Home
                  </button>

                  <button
                    onClick={() => handleNavigation("contact")}
                    className={`px-3 py-2 rounded-md text-sm font-medium
                    ${currentPage === "contact"
                        ? "text-hotel-gold bg-hotel-gold/10"
                        : `text-hotel-cream ${hoverStyle}`}`}
                  >
                    Contact
                  </button>

                  <button
                    onClick={handleLogoutClick}
                    className={`text-hotel-cream px-3 py-2 rounded-md text-sm font-medium ${hoverStyle}`}
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleNavigation("login")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium
                    ${currentPage === "login"
                        ? "text-hotel-gold"
                        : `text-hotel-cream ${hoverStyle}`}`}
                  >
                    Sign In
                  </button>

                  <button
                    onClick={() => handleNavigation("contact")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium
                    ${currentPage === "contact"
                        ? "text-hotel-gold"
                        : `text-hotel-cream ${hoverStyle}`}`}
                  >
                    Contact Us
                  </button>

                  <button
                    onClick={() => handleNavigation("signup")}
                    className="bg-hotel-gold text-hotel-dark px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-700 transition-colors"
                  >
                    Create Account
                  </button>
                </>
              )}

            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-hotel-cream hover:text-gray-300 hover:bg-gray-500/10 focus:outline-none"
            >
              {!isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-hotel-charcoal border-t border-hotel-gold/20">
          <div className="px-4 py-3 space-y-2">

            {isLoggedIn ? (
              <>
                <button onClick={() => handleNavigation("welcome")} className={`block w-full text-left px-3 py-2 rounded-md text-hotel-cream ${hoverStyle}`}>
                  Home
                </button>

                <button onClick={() => handleNavigation("contact")} className={`block w-full text-left px-3 py-2 rounded-md text-hotel-cream ${hoverStyle}`}>
                  Contact
                </button>

                <button onClick={handleLogoutClick} className={`block w-full text-left px-3 py-2 rounded-md text-hotel-cream ${hoverStyle}`}>
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button onClick={() => handleNavigation("login")} className={`block w-full text-left px-3 py-2 rounded-md text-hotel-cream ${hoverStyle}`}>
                  Sign In
                </button>

                <button onClick={() => handleNavigation("contact")} className={`block w-full text-left px-3 py-2 rounded-md text-hotel-cream ${hoverStyle}`}>
                  Contact Us
                </button>

                <button onClick={() => handleNavigation("signup")} className="block w-full text-left px-3 py-2 rounded-md text-hotel-gold hover:bg-gray-600/20 transition-colors">
                  Create Account
                </button>
              </>
            )}

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
