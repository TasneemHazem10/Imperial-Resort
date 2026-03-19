import { useState } from 'react';

function LoginPage({ onSwitchToSignup, onLogin }) {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    }
    else if (!email.includes('@')) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }
    else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);

      setTimeout(() => {
        onLogin({ email, password });
        setIsLoading(false);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-hotel-dark p-4 pt-20">

      {/* Background Image - Hotel photo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
        }}
      />

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-md">

        {/* Logo and Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif text-hotel-gold tracking-wider">
            Imperial Resort
          </h1>
          <p className="text-hotel-cream mt-2 text-sm tracking-widest uppercase">
            Experience Luxury Like Never Before
          </p>
        </div>

        {/* Login Form Card */}
        <div className="bg-hotel-charcoal/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-hotel-gold/20">

          {/* Page Title */}
          <h2 className="text-3xl font-serif text-hotel-cream text-center mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Sign in to continue to your account
          </p>

          {/* THE LOGIN FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="block text-hotel-cream text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"  // Shows email keyboard on phone
                value={email}  // Connected to email variable
                onChange={(e) => setEmail(e.target.value)}  // Update when typing
                className={`w-full px-4 py-3 bg-hotel-dark/50 border rounded-lg 
                  text-hotel-cream placeholder-gray-500 focus:outline-none 
                  focus:ring-2 focus:ring-hotel-gold/50 focus:border-hotel-gold
                  transition-all duration-300 ${errors.email ? 'border-red-500' : 'border-gray-600'}`}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-hotel-cream text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-3 bg-hotel-dark/50 border rounded-lg 
                  text-hotel-cream placeholder-gray-500 focus:outline-none 
                  focus:ring-2 focus:ring-hotel-gold/50 focus:border-hotel-gold
                  transition-all duration-300 ${errors.password ? 'border-red-500' : 'border-gray-600'}`}
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-red-400 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-600 text-hotel-gold focus:ring-hotel-gold bg-hotel-dark/50"
                />
                <span className="ml-2 text-gray-400 text-sm">Remember me</span>
              </label>
              {/* Forgot Password Link */}
              <a href=" " className="text-hotel-gold text-sm hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-hotel-gold text-hotel-dark font-semibold 
                rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 
                focus:ring-hotel-gold focus:ring-offset-2 focus:ring-offset-hotel-dark
                transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                flex items-center justify-center"
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
          <p className="text-center text-gray-400 mt-8">
            Don't have an account?{' '}
            <button onClick={onSwitchToSignup} className="text-hotel-gold hover:underline font-medium">
              Create one
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
