"use client";

// import Image from "next/image"; // Removed unused Image import
import FeatureCard from "./components/FeatureCard";
// import StepCard from "./components/StepCard"; // Removed unused StepCard import
import ProcessCard from "./components/ProcessCard";
import GlassmorphismHero from "./components/GlassmorphismHero";
// import TestimonialCarousel from "./components/TestimonialCarousel"; // Removed unused import
import { PricingDemo } from "./components/pricing/pricing-demo";
import { FaqDemo } from "./components/faq/faq-demo";
import React, { useState } from 'react'; // Removed unused useEffect
import WaitlistForm from './components/WaitlistForm';
import { BackgroundGrid } from './components/BackgroundGrid'; // Import from new location

export default function Home() {
  const [showWaitlistForm, setShowWaitlistForm] = useState(false);

  const handleOpenForm = () => {
    setShowWaitlistForm(true);
  };

  const handleCloseForm = () => {
    setShowWaitlistForm(false);
  };

  const handleFormSubmitSuccess = () => {
    console.log("Waitlist form submitted successfully!");
  };

  // Removed unused testimonials constant
  // const testimonials = [ ... ]; 

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#f0f0f0] relative overflow-hidden">
        <BackgroundGrid />
        <div className="relative z-10">
          <GlassmorphismHero 
            title="MENU DECODER" 
            subtitle="Never feel confused by unfamiliar menu terms again. Menu Decoder helps you understand ingredients, cooking methods, and dish descriptions in seconds."
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-[#f0f0f0] relative overflow-hidden">
        <BackgroundGrid />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 
              bg-gradient-to-r from-white to-gray-100 px-8 py-4 rounded-xl 
              border-4 border-black inline-block
              shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)]">
              Features
            </h2>
            <div className="h-2 bg-gradient-to-r from-black via-gray-600 to-black rounded-full mt-2 max-w-[200px] mx-auto"></div>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Menu Decoder makes dining out easier and more enjoyable with its powerful features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <FeatureCard 
              title="Instant Menu Term Recognition"
              description="Scan any menu and get instant explanations for unfamiliar culinary terms, ingredients, and cooking methods. Never feel lost while ordering again!"
              icon={
                <svg className="w-10 h-10 text-[#121212]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              }
            />

            {/* Feature 2 */}
            <FeatureCard 
              title="Allergen & Dietary Alerts"
              description="Identify potential allergens and get dietary information (vegetarian, vegan, gluten-free, etc.) for menu items. Stay safe and eat with confidence!"
              icon={
                <svg className="w-10 h-10 text-[#121212]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              }
            />

            {/* Feature 3 */}
            <FeatureCard 
              title="Multilingual Support"
              description="Traveling abroad? Menu Decoder can translate and explain foreign menu terms in multiple languages, making your international dining experiences stress-free and enjoyable."
              icon={
                <svg className="w-10 h-10 text-[#121212]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-[#f0f0f0] relative overflow-hidden">
        <BackgroundGrid />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900
              bg-gradient-to-r from-white to-gray-100 px-8 py-4 rounded-xl 
              border-4 border-black inline-block
              shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)]">
              How It Works
            </h2>
            <div className="h-2 bg-gradient-to-r from-black via-gray-600 to-black rounded-full mt-2 max-w-[200px] mx-auto"></div>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Using Menu Decoder is simple and intuitive
            </p>
          </div>

          <div className="flex justify-center">
            <ProcessCard 
              items={[
                {
                  id: 1,
                  title: "Scan",
                  description: "Take a photo of any menu using the Menu Decoder app or upload an existing menu image. Our OCR technology quickly processes the text.",
                  icon: (
                    <svg viewBox="0 0 24 24" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.5 6.5v3h-3v-3h3M11 5H5v6h6V5zm-1.5 9.5v3h-3v-3h3M11 13H5v6h6v-6zm6.5-6.5v3h-3v-3h3M19 5h-6v6h6V5zm-6 8h1.5v1.5H13V13zm1.5 1.5H16V16h-1.5v-1.5zM16 13h1.5v1.5H16V13zm-3 3h1.5v1.5H13V16zm1.5 1.5H16V19h-1.5v-1.5zM16 16h1.5v1.5H16V16zm1.5-1.5H19V16h-1.5v-1.5zm0 3H19V19h-1.5v-1.5zM22 7h-2V4h-3V2h5v5zm0 15v-5h-2v3h-3v2h5zM2 22h5v-2H4v-3H2v5zM2 2v5h2V4h3V2H2z" />
                    </svg>
                  )
                },
                {
                  id: 2,
                  title: "Analyze",
                  description: "Tap on unfamiliar terms, ingredients, or dishes to get instant explanations. Our AI provides detailed information about cooking methods and potential allergens.",
                  icon: (
                    <svg viewBox="0 0 24 24" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                      <path d="M11 11h2v6h-2zm0-4h2v2h-2z" />
                    </svg>
                  )
                },
                {
                  id: 3,
                  title: "Enjoy",
                  description: "Order with confidence knowing exactly what's in your dish. No more food anxiety or surprise ingredients - just delicious meals that match your dietary needs.",
                  icon: (
                    <svg viewBox="0 0 24 24" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 17.561C11.9753 17.561 11.9507 17.5587 11.9263 17.554C9.47997 17.3723 3 14.2873 3 8.501V5.994C3 5.444 3.449 5.001 4 5.001H7.25C7.473 5.001 7.695 5.053 7.894 5.1545L8.3015 5.334L9 6.0345V13.501C9 14.6055 9.895 15.501 11 15.501C12.105 15.501 13 14.6055 13 13.501V5.001H20C20.551 5.001 21 5.444 21 5.994V8.501C21 14.2855 14.5197 17.3718 12.0735 17.554C12.0492 17.5587 12.0247 17.561 12 17.561Z" />
                    </svg>
                  )
                }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section - Temporarily Commented Out
      -----------------------------------------------------
      <section id="testimonials" className="py-20 bg-[#f0f0f0] relative overflow-hidden">
        <BackgroundGrid />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900
              bg-gradient-to-r from-white to-gray-100 px-8 py-4 rounded-xl 
              border-4 border-black inline-block
              shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)]">
              What Our Users Say
            </h2>
            <div className="h-2 bg-gradient-to-r from-black via-gray-600 to-black rounded-full mt-2 max-w-[250px] mx-auto"></div>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join thousands of satisfied users who love Menu Decoder
            </p>
            
            <TestimonialCarousel testimonials={testimonials} />
            
            <p className="mt-6 text-gray-600 italic">
              Hover over a card to pause the rotation and read the full testimonial
            </p>
          </div>
        </div>
      </section>
      ----------------------------------------------------- */}

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-[#f0f0f0] relative overflow-hidden">
        <BackgroundGrid />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Plans
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your menu decoding needs
            </p>
          </div>
          <PricingDemo />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-[#f0f0f0] relative overflow-hidden">
        <BackgroundGrid />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FaqDemo />
        </div>
      </section>

      {/* CTA Section */}
      <section id="get-started" className="py-20 bg-[#f0f0f0] relative overflow-hidden">
        <BackgroundGrid />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-white rounded-xl p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Decode Any Menu?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Our app is launching soon! Join the waitlist to be notified.
            </p>
            <div className="flex justify-center">
              <button
                onClick={handleOpenForm}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-black text-lg font-bold rounded-md text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] transition-all duration-200"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </section>

      {showWaitlistForm && (
        <WaitlistForm
          onClose={handleCloseForm}
          onSubmitSuccess={handleFormSubmitSuccess}
        />
      )}
    </>
  );
}
