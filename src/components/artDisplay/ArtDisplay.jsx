import React, { useState } from 'react';
import Art from "../../assets/artnft.jpeg"
import { FaInstagram, FaTwitter, FaTiktok, FaFacebook } from 'react-icons/fa';

const ArtDisplayCard = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prevState) => {
      // Close other sections and toggle the clicked section
      const newSections = { ...prevState };
      for (let key in newSections) {
        if (key !== section) newSections[key] = false; // Close all other sections
      }
      newSections[section] = !newSections[section]; // Toggle the clicked section
      return newSections;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <img
          src={Art}
          alt="Art"
          className="w-full h-56 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">THE COLORS OF HOPE.</h2>
          <p className="text-gray-500 text-sm mb-4">By... OLUKOWI KAYODE DANIEL</p>

          <div className="space-y-2">
            {['Year', 'Description', 'Story'].map((section) => (
              <div key={section} className="border-b border-gray-300 pb-2">
                <button
                  onClick={() => toggleSection(section)}
                  className="flex justify-between items-center w-full text-gray-700 text-left focus:outline-none"
                >
                  <span className="font-medium">{section}</span>
                  <span
                    className={`transform transition-transform duration-600 ${
                      openSections[section] ? 'rotate-180' : ''
                    }`}
                  >
                    ▼
                  </span>
                </button>
                <div
                  className={`transition-all duration-600 overflow-hidden max-h-[${openSections[section] ? '500px' : '0'}]`}>
                  {openSections[section] && (
                    <p className="text-sm text-gray-600 mt-2">
                      {section === 'Year' && '2024'}
                      {section === 'Description' && 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                      {section === 'Story' && 'My fingers brushed lightly over my pallets, a mixture leafy greens, purple, white, burnt sienna and hopeful yellows, maybe am not just painting, I will be telling a story that had been quietly lingering in my heart for long.On this day, I picked up my brushes, determined to paint not just a scene but a journey, I began with warm sienna tones, at the top of the canvas symbolizing the sturdy floors of my childhood homes, at the upper right left side, a husky building which represents the place I was nurtured, the strokes receded downward, transitioning into a vivid greens and yellows sorrounded by earthy browns a scope of me learning about patience and growth.As I paint through, I thought of every moments that has led me to this point, the love of my family,  the pull of dreams, the ego and the price to be paid which is graciously represented by the unique qualities of a peacock. My art was not just about places or objects, it was about a life woven from ordinary yet extraordinary threads of existence. Every dream begins'}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-100 p-4 text-center">
          <p className="text-gray-500 text-sm mb-2">Follow Us</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-800 transition"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-800 transition"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-800 transition"
            >
              <FaTiktok size={24} />
            </a>
            <a
              href="https://www.facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-800 transition"
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtDisplayCard;
