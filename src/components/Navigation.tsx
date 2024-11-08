import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-700">VigRx Plus</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Benefits', 'Ingredients', 'Research', 'Reviews', 'FAQ'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-blue-700">
                {item}
              </a>
            ))}
            <a 
              href="https://www.vigrxplus.com/ct/221426" 
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Order Now
            </a>
          </div>
          
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'Benefits', 'Ingredients', 'Research', 'Reviews', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 text-gray-700 hover:text-blue-700"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="https://www.vigrxplus.com/ct/221426" 
              className="block px-3 py-2 text-white bg-blue-600 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;