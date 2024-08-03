import React from 'react';

export default function About() {
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center bg-gradient-to-b from-white to-primary/[.5] px-20 py-24 space-y-16"
    >
      <div className="flex flex-col justify-center items-center space-y-8">
        <div className="relative w-full text-center">
          <h1 className="text-6xl">About Us</h1>
          <h1 className="text-[5rem] absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.05] w-full">
            About Us
          </h1>
        </div>
        <p className="max-w-lg text-center text-lg">
          Welcome to Home Parrot, your trusted partner in discovering premium properties. At Home
          Parrot, we specialize in providing an extensive and diverse range of property listings to
          cater to your every need.
        </p>
      </div>
      <div className="flex space-x-10">
        <div className="bg-black py-10 px-5 max-w-[25rem] rounded-3xl">
          <h3 className="text-2xl text-white mb-3">Who We Are</h3>
          <div className="space-y-2">
            <p className="leading-7 text-white/[.85]">
              Home Parrot is more than just a property listings firm. We are your reliable
              companion, navigating the vast landscape of real estate to bring you the finest homes.
            </p>
            <p className="leading-7 text-white/[.85]">
              Just like a parrot known for its ability to communicate effectively, we bring you the
              most accurate and up-to-date information about properties, ensuring you are
              well-informed and confident in your choices.
            </p>
          </div>
        </div>
        <div className="bg-black py-10 px-5 max-w-[25rem] rounded-3xl">
          <h3 className="text-2xl text-white mb-3">What We Do</h3>
          <div className="space-y-2">
            <p className="leading-7 text-white/[.85]">
              Our platform is designed to simplify your search for the perfect property. Whether you
              are looking for a cozy apartment, a spacious house, or a lucrative rental property.
            </p>
            <p className="leading-7 text-white/[.85]">
              We leverage the latest technology and market insights to ensure that our listings are
              comprehensive and reflective of current market conditions and we provides detailed
              listings that meet your criteria.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}