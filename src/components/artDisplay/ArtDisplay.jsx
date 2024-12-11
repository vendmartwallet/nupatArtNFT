// ArtDisplayCard.js
import React, { useState } from 'react';
import Art from "../../assets/artnft.jpg"

const ArtDisplayCard = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
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
          <h2 className="text-xl font-bold text-gray-800">DARK RAY</h2>
          <p className="text-gray-500 text-sm mb-4">By... UGWU HENRY CHIBUIKE</p>

          <div className="space-y-2">
            {['Price', 'Description', 'Story'].map((section) => (
              <div key={section} className="border-b border-gray-300 pb-2">
                <button
                  onClick={() => toggleSection(section)}
                  className="flex justify-between items-center w-full text-gray-700 text-left focus:outline-none"
                >
                  <span className="font-medium">{section}</span>
                  <span
                    className={`transform transition-transform duration-300 ${
                      openSections[section] ? 'rotate-180' : ''
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {openSections[section] && (
                  <p className="text-sm text-gray-600 mt-2">
                    {section === 'Price' && '2000$'}
                    {section === 'Description' && 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                    {section === 'Story' && 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel sapien sit amet nulla vulputate facilisis.'}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-100 p-4 text-center">
          <p className="text-gray-500 text-sm mb-2">Follow Us</p>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-800 transition"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-800 transition"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-800 transition"
            >
              <i className="fa fa-tiktok"></i>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-800 transition"
            >
              <i className="fa fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtDisplayCard;