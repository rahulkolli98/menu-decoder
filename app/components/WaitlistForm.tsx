"use client";

import React, { useState } from 'react';

interface WaitlistFormProps {
  onClose: () => void; // Function to close the form
  onSubmitSuccess: () => void; // Function to handle successful submission
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({ onClose, onSubmitSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    // Basic validation
    if (!name || !email) {
      setError("Name and Email are required.");
      setIsSubmitting(false);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setError("Please enter a valid email address.");
        setIsSubmitting(false);
        return;
    }


    // Simulate API call
    console.log('Submitting waitlist data:', { name, email, feedback });
    try {
      // Replace with your actual API endpoint
      // const response = await fetch('/api/waitlist', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ name, email, feedback }),
      // });
      // if (!response.ok) {
      //   throw new Error('Failed to submit form.');
      // }

      // Simulate success after 1 second
      await new Promise(resolve => setTimeout(resolve, 1000));


      setSuccess("Successfully joined the waitlist!");
      setName('');
      setEmail('');
      setFeedback('');
      onSubmitSuccess(); // Call the success handler from the parent
       // Optionally close the form automatically after a delay
      setTimeout(() => {
        onClose();
      }, 2000); // Close after 2 seconds

    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred.");
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4 transition-opacity duration-300 ease-in-out">
      {/* Retained the existing box style which matches page sections */}
      <div className="bg-white rounded-xl p-6 md:p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] max-w-md w-full relative transform transition-all duration-300 ease-in-out scale-95 opacity-0 animate-fade-in-scale">
         <button
           onClick={onClose}
           className="absolute top-2 right-3 text-gray-600 hover:text-gray-900 text-3xl font-bold leading-none"
           aria-label="Close form"
         >
           &times;
         </button>
         {/* Updated title style */}
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Join the Waitlist</h3>
        <form onSubmit={handleSubmit} className="space-y-5"> {/* Increased spacing slightly */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1"> {/* Made label bold */}
              Name <span className="text-red-500">*</span>
            </label>
            {/* Updated input styles */}
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200 text-base placeholder-gray-400"
              placeholder="Your Name" 
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1"> {/* Made label bold */}
              Email <span className="text-red-500">*</span>
            </label>
            {/* Updated input styles */}
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200 text-base placeholder-gray-400"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label htmlFor="feedback" className="block text-sm font-semibold text-gray-700 mb-1"> {/* Made label bold */}
              Feedback (Optional)
            </label>
            {/* Updated textarea styles */}
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={3}
              className="w-full px-4 py-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200 text-base placeholder-gray-400"
              placeholder="Any thoughts or suggestions?"
            />
          </div>

          {error && <p className="text-sm text-red-600 bg-red-100 p-3 rounded-md font-medium">{error}</p>}  
          {success && <p className="text-sm text-green-600 bg-green-100 p-3 rounded-md font-medium">{success}</p>} 


          <div className="text-center pt-3"> {/* Added slight padding top */}
            {/* Updated button style to match the main CTA button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full inline-flex items-center justify-center px-8 py-3 border-2 border-black text-lg font-bold rounded-md text-white transition-all duration-200 ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed shadow-none' // Simpler disabled style
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)]'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
      {/* Existing fade-in animation */}
      <style jsx>{`
        @keyframes fade-in-scale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default WaitlistForm;
