import { useState } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ContactPage from './pages/ContactPage';
import WelcomePage from './pages/WelcomePage';
import HomePage from './pages/HomePage';

function App() {
  const [currentPage, setCurrentPage] = useState('welcome');
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setCurrentPage('welcome');
  };

  const handleSignup = (userData) => {
    setUser(userData);
    setCurrentPage('welcome');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('login');
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return (
          <LoginPage
            onSwitchToSignup={() => setCurrentPage('signup')}
            onLogin={handleLogin}
          />
        );

      case 'signup':
        return (
          <SignupPage
            onSwitchToLogin={() => setCurrentPage('login')}
            onSignup={handleSignup}
          />
        );

      case 'contact':
        return (
          <ContactPage
            onBack={() => setCurrentPage(user ? 'welcome' : 'login')}
          />
        );

      case 'welcome':
        return (
          <WelcomePage
            user={user}
            onLogout={handleLogout}
            onContact={() => setCurrentPage('contact')}
            onGoToLogin={() => setCurrentPage('login')}
            onGoToSignup={() => setCurrentPage('signup')}
          />
        );

      case 'home':
        return (
          <HomePage
            user={user}
            onLogout={handleLogout}
            onContact={() => setCurrentPage('contact')}
            onGoToLogin={() => setCurrentPage('login')}
            onGoToSignup={() => setCurrentPage('signup')}
          />
        );
      default:
        return (
          <LoginPage
            onSwitchToSignup={() => setCurrentPage('signup')}
            onLogin={handleLogin}
          />
        );
    }
  };

  const isLoggedIn = user !== null;

  const fullLayoutPages = ['login', 'welcome', 'signup', 'home'];
  const showFullLayout = fullLayoutPages.includes(currentPage);

  return (
    <div className="min-h-screen bg-hotel-dark flex flex-col">

      {showFullLayout && (
        <Navbar
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}

      <main className={showFullLayout ? 'pt-20 flex-grow' : 'flex-grow'}>
        {renderPage()}
      </main>

      {showFullLayout && (
        <Footer onNavigate={handleNavigation} />
      )}
    </div>
  );
}

export default App;
