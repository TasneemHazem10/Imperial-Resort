import { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ContactPage from './pages/ContactPage';
import WelcomePage from './pages/WelcomePage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import SearchResultsPage from './pages/SearchResultsPage';
import BookingDetailsPage from './pages/BookingDetails';
import CheckoutPage from './pages/CheckoutPage';
import { deluxeRoom, seaViewRoom, doubleRoom } from './data/RoomData';

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (userData) => {
    setUser(userData);
    navigate('/welcome');
  };

  const handleSignup = (userData) => {
    setUser(userData);
    navigate('/welcome');
  };

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  const isLoggedIn = user !== null;

  const fullLayoutPaths = [
    '/login',
    '/welcome',
    '/signup',
    '/home',
    '/deluxe-room',
    '/sea-view-room',
    '/double-room',
    '/checkout',
    '/profile',
    '/search-results',
    '/suite-room',
    '/triple-room',
    '/connected-room',
    '/single-room',
    '/contact',
  ];
  const showFullLayout = fullLayoutPaths.includes(location.pathname);

  const pathToPageKey = (path) => {
    if (path.startsWith('/deluxe-room')) return 'deluxe-room';
    if (path.startsWith('/sea-view-room')) return 'sea-view-room';
    if (path.startsWith('/double-room')) return 'double-room';
    if (path.startsWith('/search-results')) return 'search-results';
    if (path === '/welcome') return 'welcome';
    if (path === '/signup') return 'signup';
    if (path === '/home') return 'home';
    if (path === '/contact') return 'contact';
    if (path === '/profile') return 'profile';
    if (path === '/suite-room') return 'suite-room';
    if (path === '/triple-room') return 'triple-room';
    if (path === '/connected-room') return 'connected-room';
    if (path === '/single-room') return 'single-room';
    return path === '/login' || path === '/' ? 'login' : '';
  };

  const handleNavigate = (page) => {
    const map = {
      home: '/home',
      contact: '/contact',
      login: '/login',
      signup: '/signup',
      welcome: '/welcome',
      'deluxe-room': '/deluxe-room',
      'sea-view-room': '/sea-view-room',
      'double-room': '/double-room',
      checkout: '/checkout',
      'search-results': '/search-results',
      'suite-room': '/suite-room',
      'triple-room': '/triple-room',
      'connected-room': '/connected-room',
      'single-room': '/single-room',
      profile: '/profile',
    };
    const to = map[page] || '/';
    navigate(to);
  };

  const currentPage = pathToPageKey(location.pathname);

  return (
    <div className="min-h-screen bg-hotel-dark flex flex-col">
      {showFullLayout && (
        <Navbar
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
          currentPage={currentPage}
          setCurrentPage={handleNavigate}
        />
      )}

      <main className={showFullLayout ? 'pt-20 flex-grow' : 'flex-grow'}>
        <Routes>
          <Route
            path="/"
            element={<LoginPage onSwitchToSignup={() => navigate('/signup')} onLogin={handleLogin} />}
          />
          <Route
            path="/login"
            element={<LoginPage onSwitchToSignup={() => navigate('/signup')} onLogin={handleLogin} />}
          />
          <Route
            path="/signup"
            element={<SignupPage onSwitchToLogin={() => navigate('/login')} onSignup={handleSignup} />}
          />
          <Route
            path="/welcome"
            element={<WelcomePage user={user} onLogout={handleLogout} onContact={() => navigate('/contact')} />}
          />
          <Route 
            path="/profile"
            element={<ProfilePage />} />
          <Route
            path="/home"
            element={
              <HomePage
                user={user}
                onContact={() => navigate('/contact')}
                onGoToLogin={() => navigate('/login')}
                onGoToSignup={() => navigate('/signup')}
                onGoToProfile={() => navigate('/profile')}
              />
            }
          />
          <Route
            path="/contact"
            element={<ContactPage onBack={() => (isLoggedIn ? navigate('/welcome') : navigate('/login'))} />}
          />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/search-results" element={<SearchResultsPage />} />
          <Route path="/deluxe-room" element={<BookingDetailsPage room={deluxeRoom} />} />
          <Route path="/sea-view-room" element={<BookingDetailsPage room={seaViewRoom} />} />
          <Route path="/double-room" element={<BookingDetailsPage room={doubleRoom} />} />
          <Route path="/booking" element={<BookingDetailsPage />} />
          <Route path="/checkout" element={<CheckoutPage onBack={() => navigate('/home')} />} />
          <Route
            path="*"
            element={<LoginPage onSwitchToSignup={() => navigate('/signup')} onLogin={handleLogin} />}
          />
        </Routes>
      </main>

      {showFullLayout && <Footer onNavigate={handleNavigate} />}
    </div>
  );
}

export default App;
