import { useState } from 'react'; 

function ContactPage({ onBack }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setTimeout(() => setShowSuccess(false), 5000);
      }, 2000);
    }
  };
  const subjectOptions = [
    { value: '', label: 'Select a subject' },
    { value: 'reservation', label: 'Reservation Inquiry' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'complaint', label: 'Complaint' },
    { value: 'event', label: 'Event Booking' },
    { value: 'other', label: 'Other' }
  ];
  return (
    <div className="min-h-screen bg-hotel-dark p-4 md:p-8 pt-24">
      
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
        }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        
        <button 
          onClick={onBack}
          className="flex items-center text-hotel-gold hover:text-yellow-400 transition-colors mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-hotel-charcoal/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-hotel-gold/20">
            <h1 className="text-4xl font-serif text-hotel-gold mb-4">
              Get in Touch
            </h1>
            <p className="text-gray-300 mb-8">
              We would love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            <div className="space-y-6">

              <div className="flex items-start">
                <div className="w-12 h-12 bg-hotel-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-hotel-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-hotel-cream font-semibold">Address</h3>
                  <p className="text-gray-400"> Street 12 <br /> Cairo, Egypt </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-hotel-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-hotel-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-hotel-cream font-semibold">Phone</h3>
                  <p className="text-gray-400"> +20 123456789 </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-hotel-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-hotel-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-hotel-cream font-semibold">Email</h3>
                  <p className="text-gray-400">ImperialResort@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-hotel-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-hotel-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-hotel-cream font-semibold">Hours</h3>
                  <p className="text-gray-400">24/7 Customer Service</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-hotel-charcoal/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-hotel-gold/20">
            <h2 className="text-2xl font-serif text-hotel-cream mb-6">
              Send us a Message
            </h2>

            {showSuccess && (
              <div className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-lg mb-6 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Message sent successfully! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-hotel-cream text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-hotel-dark/50 border rounded-lg text-hotel-cream placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-hotel-gold/50 focus:border-hotel-gold transition-all duration-300 ${errors.name ? 'border-red-500' : 'border-gray-600'}`}
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-hotel-cream text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-hotel-dark/50 border rounded-lg text-hotel-cream placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-hotel-gold/50 focus:border-hotel-gold transition-all duration-300 ${errors.email ? 'border-red-500' : 'border-gray-600'}`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-hotel-cream text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-hotel-dark/50 border rounded-lg text-hotel-cream placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-hotel-gold/50 focus:border-hotel-gold transition-all duration-300 ${errors.phone ? 'border-red-500' : 'border-gray-600'}`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-hotel-cream text-sm font-medium mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-hotel-dark/50 border rounded-lg text-hotel-cream focus:outline-none focus:ring-2 focus:ring-hotel-gold/50 focus:border-hotel-gold transition-all duration-300 ${errors.subject ? 'border-red-500' : 'border-gray-600'}`}
                  >
                    {subjectOptions.map(option => (
                      <option key={option.value} value={option.value} className="bg-hotel-dark">
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                </div>
              </div>

              <div>
                <label className="block text-hotel-cream text-sm font-medium mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 bg-hotel-dark/50 border rounded-lg text-hotel-cream placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-hotel-gold/50 focus:border-hotel-gold transition-all duration-300 resize-none ${errors.message ? 'border-red-500' : 'border-gray-600'}`}
                  placeholder="Tell us how we can help you"
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 bg-hotel-gold text-hotel-dark font-semibold rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-hotel-gold focus:ring-offset-2 focus:ring-offset-hotel-charcoal transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactPage;
