import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from './components/Navigation';
import Benefits from './components/Benefits';
import Ingredients from './components/Ingredients';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                VigRx Plus: Natural Support for Male Wellness
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Scientifically formulated with premium natural ingredients for optimal male vitality and wellness.
              </p>
              <ul className="space-y-3 mb-8">
                {['Clinically Studied Formula', 'Doctor Recommended', '67-Day Money-Back Guarantee'].map((item) => (
                  <li key={item} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex space-x-4">
                <a 
                  href="https://www.vigrxplus.com/ct/221426"
                  className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition flex items-center"
                >
                  Order Now <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a 
                  href="#benefits"
                  className="border border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://www.vigrxplus.com/wp-content/uploads/2024/08/hero-prod.png" 
                alt="VigRx Plus Product"
                className="w-full max-w-xl mx-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Endorsement */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <img 
              src="https://www.vigrxplus.com/wp-content/uploads/2024/08/dr-steven-lamm.png" 
              alt="Dr. Steven Lamm"
              className="w-48"
            />
            <div className="max-w-2xl">
              <p className="text-xl text-gray-600 italic mb-4">
                "VigRx Plus represents a scientific breakthrough in natural male enhancement."
              </p>
              <p className="font-semibold text-gray-800">Dr. Steven Lamm, M.D.</p>
              <p className="text-sm text-gray-600">Medical Director, NYU Langone Preston Robert Tisch Center for Men's Health</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose VigRx Plus</h2>
          <Benefits />
        </div>
      </section>

      {/* Ingredients Section */}
      <section id="ingredients" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Premium Natural Ingredients</h2>
          <Ingredients />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <Testimonials />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: "How should I take VigRx Plus?", a: "Take one tablet twice daily with meals." },
              { q: "How long until I see results?", a: "Individual results may vary. Most users report positive changes within 30-60 days of consistent use." },
              { q: "Is VigRx Plus safe?", a: "VigRx Plus is made with natural ingredients in an FDA-registered facility. Always consult your healthcare provider before starting any supplement regimen." }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Start Your Journey to Better Wellness Today</h2>
          <a 
            href="https://www.vigrxplus.com/ct/221426"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Order Now <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-white mb-4">VigRx Plus</h3>
              <p className="text-sm">Leading natural supplement for male wellness since 2002.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#benefits" className="hover:text-white">Benefits</a></li>
                <li><a href="#ingredients" className="hover:text-white">Ingredients</a></li>
                <li><a href="#reviews" className="hover:text-white">Reviews</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <p className="text-xs">These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} VigRx Plus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;