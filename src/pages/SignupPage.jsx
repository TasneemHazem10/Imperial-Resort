import { useState } from 'react';

function SignupPage({ onSwitchToLogin, onSignup }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',          
    password: '',        
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;  
    
    setFormData(prev => ({
      ...prev,       
      [name]: value   
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {}; 
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, and number';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!acceptTerms) {
      newErrors.terms = 'You must accept the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    if (validateForm()) {
      setIsLoading(true);
      
      setTimeout(() => {
        onSignup(formData); 
        setIsLoading(false);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-hotel-dark p-4 pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1925&q=80)'
        }}
      />
      
      <div className="relative z-10 w-full max-w-md">
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif text-hotel-gold tracking-wider">
            Imperial Resort
          </h1>
          <p className="text-hotel-cream mt-2 text-sm tracking-widest uppercase">
            Experience Luxury Like Never Before
          </p>
        </div>

        <div className="bg-hotel-charcoal/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-hotel-gold/20">
          
          <h2 className="text-3xl font-serif text-hotel-cream text-center mb-2">
            Create Account
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Join us and start your unforgettable experience today!
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-hotel-cream text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"           
                value={formData.fullName} 
                onChange={handleChange} 
                className={`w-full px-4 py-3 bg-hotel-dark/50 border rounded-lg 
                  text-hotel-cream placeholder-gray-500 focus:outline-none 
                  focus:ring-2 focus:ring-hotel-gold/50 focus:border-hotel-gold
                  transition-all duration-300 ${errors.fullName ? 'border-red-500' : 'border-gray-600'}`}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>
            {/* Email Field */}
            <div>
              <label className="block text-hotel-cream text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-hotel-dark/50 border rounded-lg 
                  text-hotel-cream placeholder-gray-500 focus:outline-none 
                  focus:ring-2 focus:ring-hotel-gold/50 focus:border-hotel-gold
                  transition-all duration-300 ${errors.email ? 'border-red-500' : 'border-gray-600'}`}
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-hotel-cream text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-hotel-dark/50 border rounded-lg 
                  text-hotel-cream placeholder-gray-500 focus:outline-none 
                  focus:ring-2 focus:ring-hotel-gold/50 focus:border-hotel-gold
                  transition-all duration-300 ${errors.phone ? 'border-red-500' : 'border-gray-600'}`}
                placeholder="+1 234 567 8900"
              />
              {errors.phone && (
                <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-hotel-cream text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-hotel-dark/50 border rounded-lg 
                  text-hotel-cream placeholder-gray-500 focus:outline-none 
                  focus:ring-2 focus:ring-hotel-gold/50 focus:border-hotel-gold
                  transition-all duration-300 ${errors.password ? 'border-red-500' : 'border-gray-600'}`}
                placeholder="Min 8 characters"
              />
              {errors.password && (
                <p className="text-red-400 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            {/* Confirm Password Field */}
            <div>
              <label className="block text-hotel-cream text-sm font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-hotel-dark/50 border rounded-lg 
                  text-hotel-cream placeholder-gray-500 focus:outline-none 
                  focus:ring-2 focus:ring-hotel-gold/50 focus:border-hotel-gold
                  transition-all duration-300 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-600'}`}
                placeholder="Re-enter password"
              />
              {errors.confirmPassword && (
                <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Terms Checkbox */}
            <label className="flex items-start cursor-pointer">
              <input 
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-gray-600 text-hotel-gold focus:ring-hotel-gold bg-hotel-dark/50"
              />
              <span className="ml-2 text-gray-400 text-sm">
                I agree to the{' '}
                <a href="#" className="text-hotel-gold hover:underline">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-hotel-gold hover:underline">Privacy Policy</a>
              </span>
            </label>
            {errors.terms && (
              <p className="text-red-400 text-sm">{errors.terms}</p>
            )}

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
                'Create Account'
              )}
            </button>
          </form>
          
          <p className="text-center text-gray-400 mt-8">
            Already have an account?{' '}
            <button onClick={onSwitchToLogin} className="text-hotel-gold hover:underline font-medium">
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
export default SignupPage;
