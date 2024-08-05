import React, { useState } from 'react';
import data from 'data/index.json';
import { Listing } from 'components/types';
import {
  DirectionsWalk,
  DriveEta,
  DirectionsBus,
  Sell,
  Star,
  StarBorder,
} from '@mui/icons-material';
import { Button } from '@mui/material';
import AnimateOnScroll from 'components/animate-on-scroll';

export default function FeaturedListings() {
  const [hoveredCardId, setHoveredCardId] = useState('');

  const featuredListings = data['listings'].filter((listing: Listing) => {
    return listing.featured === true;
  });

  const scrollToCard = (listingId: string) => {
    const element = document.getElementById(listingId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      id="listings"
      className="flex flex-col px-20 py-24 space-y-16 bg-gradient-to-b to-white from-secondary/[.5]"
    >
      <div className="flex flex-col justify-center items-center space-y-8">
        <div className="relative w-full text-center">
          <AnimateOnScroll refIndex={2}>
            <h1 className="text-6xl">Featured Listings</h1>
          </AnimateOnScroll>
          <h1 className="text-7xl absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.05] w-full">
            Featured Listings
          </h1>
        </div>
        <AnimateOnScroll refIndex={4}>
          <p className="max-w-lg text-center text-xl">
            Handpicked premium properties curated just for you.
          </p>
        </AnimateOnScroll>
      </div>
      <div className="flex space-x-6 overflow-x-scroll pb-6">
        {featuredListings.map((listing: Listing) => {
          return (
            <div
              key={listing.id}
              onMouseOver={() => setHoveredCardId(`${listing.id}`)}
              onMouseLeave={() => setHoveredCardId('')}
              className="shadow-lg bg-white w-80 rounded-xl overflow-hidden flex-shrink-0 relative"
            >
              <div
                className={`absolute top-0 left-0 h-full w-full bg-secondary/[.8] z-20 flex flex-col justify-center items-center transform space-y-3 cursor-default ${
                  hoveredCardId === `${listing.id}`
                    ? 'duration-200 opacity-100'
                    : 'duration-500 opacity-0'
                }`}
              >
                <div
                  className={`flex flex-col justify-center items-center transform duration-500 ${
                    hoveredCardId === `${listing.id}`
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-full opacity-0'
                  }`}
                >
                  <h3 className="text-white text-xl font-clash font-semibold">{listing.name}</h3>
                  <div>
                    {listing.rating &&
                      [...Array(5).keys()].map((rating) => {
                        return rating + 1 <= +listing.rating ? (
                          <Star fontSize="small" key={rating} className="text-primary" />
                        ) : (
                          <StarBorder fontSize="small" key={rating} className="text-white" />
                        );
                      })}
                  </div>
                </div>
                <Button
                  color="primary"
                  className="text-black"
                  onClick={() => scrollToCard(`${hoveredCardId}_listing`)}
                >
                  View Details
                </Button>
              </div>
              <div className="relative z-10">
                <div
                  style={{
                    backgroundImage: `url(${listing.image_urls[0]})`,
                  }}
                  className="h-[12rem] bg-no-repeat bg-center bg-cover"
                ></div>
                {listing.voucher && (
                  <div className="absolute bottom-0 left-0 w-full p-2 bg-primary text-white text-sm rounded-t text-center">
                    <Sell fontSize="small" className="text-green" />{' '}
                    <span className="text-green font-medium">{listing.voucher}</span>
                  </div>
                )}
              </div>
              <div className="flex flex-col p-5 pb-6 space-y-3.5">
                <div className="space-y-1">
                  <h3 className="font-clash font-semibold text-lg">{listing.name}</h3>
                  <div className="flex items-center space-x-1.5">
                    <span className="text-sm">From</span>
                    <div>
                      <span className="text-lg font-semibold text-tertiary">
                        {listing.starting_price}
                      </span>
                      <span className="text-sm">/week</span>
                    </div>
                  </div>
                  <div className="bg-secondary text-white px-2 p-1 w-fit text-sm font-medium rounded">
                    {listing.cheapest_period}
                  </div>
                </div>
                <div className="flex items-end space-x-4">
                  {listing.distance.walk && (
                    <div className="flex items-center">
                      <DirectionsWalk className="text-gray-700 text-lg" />{' '}
                      <span className="text-sm font-regular">{listing.distance.walk}</span>
                    </div>
                  )}
                  {listing.distance.car && (
                    <div className="flex items-center space-x-1">
                      <DriveEta className="text-gray-700 text-lg" />{' '}
                      <span className="text-sm font-regular">{listing.distance.car}</span>
                    </div>
                  )}
                  {listing.distance.bus && (
                    <div className="flex items-center space-x-1">
                      <DirectionsBus className="text-gray-700 text-lg" />{' '}
                      <span className="text-sm font-regular">{listing.distance.bus}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
