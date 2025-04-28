"use client";

import React, { useState, FormEvent } from 'react';

interface WaitlistFormProps {
  onClose: () => void; // Function to close the form
  onSubmitSuccess: () => void; // Function to handle successful submission
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({ onClose, onSubmitSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    // Basic client-side validation (Server validates too)
    if (!name || name.trim() === '') {
        setError("Please enter your name.");
        setIsLoading(false);
        return;
    }
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      setIsLoading(false);
      return;
    }

    try {
      // Use the actual API endpoint
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Send name, email, and feedback
        body: JSON.stringify({ name: name.trim(), email: email.trim(), feedback: feedback.trim() }),
      });

      const result = await response.json(); // Always parse JSON response

      if (!response.ok) {
        // Use message from API if available, otherwise generic error
        throw new Error(result.message || `An error occurred: ${response.statusText}`);
      }

      // Handle Success
      setSuccess(true);
      setName(''); // Clear inputs on success
      setEmail('');
      setFeedback('');
      onSubmitSuccess(); // Call the success handler from the parent

      // Keep the form open to show the success message
      // Optionally close after delay:
      // setTimeout(() => {
      //   onClose();
      // }, 3000); // Close after 3 seconds

    } catch (err: any) {
      console.error("Submission error:", err);
      // Display the error message from the API or the caught error
      setError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false); // Ensure loading is set to false
    }
  };

  return (
    // Overlay styling (using backdrop-blur for modern effect)
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4 backdrop-blur-sm transition-opacity duration-300 ease-in-out">
      {/* Form container styling */}
      <div className="bg-white rounded-xl p-6 md:p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] max-w-md w-full relative transform transition-all duration-300 ease-in-out scale-95 opacity-0 animate-fade-in-scale">
         {/* Close Button */}
         <button
           onClick={onClose}
           disabled={isLoading}
           className="absolute top-2 right-3 text-gray-500 hover:text-black text-3xl font-bold leading-none disabled:opacity-50"
           aria-label="Close form"
         >
           &times;
         </button>

        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Join the Waitlist</h3>

        {/* Success Message Display */}
        {success ? (
          <div className="text-center">
             <p className="text-green-700 bg-green-100 p-4 rounded-lg border-2 border-green-600 font-semibold mb-4 shadow-sm">
                 Thanks for joining! We'll be in touch soon. 🎉
            </p>
            <button
                 onClick={onClose}
                 className="w-full inline-flex items-center justify-center px-6 py-2 border-2 border-black text-base font-bold rounded-md text-black bg-gray-200 hover:bg-gray-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] active:translate-y-[2px] active:translate-x-[2px] transition-all duration-150"
            >
                Close
            </button>
          </div>
        ) : (
          /* Form Display */
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isLoading}
                className="w-full px-4 py-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 text-base placeholder-gray-500 text-black disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="Your Name"
              />
            </div>
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                Email <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                className="w-full px-4 py-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 text-base placeholder-gray-500 text-black disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="your.email@example.com"
              />
            </div>
            {/* Feedback Textarea */}
            <div>
              <label htmlFor="feedback" className="block text-sm font-semibold text-gray-700 mb-1">
                Feedback (Optional)
              </label>
              <textarea
                id="feedback"
                name="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows={3}
                disabled={isLoading}
                className="w-full px-4 py-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 text-base placeholder-gray-500 text-black disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="Any thoughts or suggestions?"
              />
            </div>

            {/* Error Message Display */}
            {error && (
              <p className="text-sm text-red-700 bg-red-100 p-3 rounded-md border border-red-300 font-medium">
                {error}
              </p>
            )}

            {/* Submit Button */}
            <div className="pt-2"> 
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full inline-flex items-center justify-center px-8 py-3 border-2 border-black text-lg font-bold rounded-md text-white transition-all duration-200 ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed shadow-inner'
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] active:translate-y-[2px] active:translate-x-[2px]'
                }`}
              >
                {isLoading ? 'Submitting...' : 'Join Waitlist'}
              </button>
            </div>
             <p className="text-xs text-gray-500 text-center pt-1">We respect your privacy. No spam, ever.</p>
          </form>
        )}
      </div>
      {/* Fade-in Animation Style */}
      <style jsx>{`
        @keyframes fade-in-scale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default WaitlistForm;
