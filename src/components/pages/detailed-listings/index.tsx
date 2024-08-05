import data from 'data/index.json';
import { Listing } from 'components/types';
import {
  DirectionsWalk,
  DriveEta,
  DirectionsBus,
  School,
  Apartment,
  Star,
} from '@mui/icons-material';
import { Button } from '@mui/material';
import AnimateOnScroll from 'components/animate-on-scroll';

export default function DetailedListings() {
  return (
    <div className="flex flex-col p-10 md:p-16 lg:p-20 space-y-8 md:space-y-12 lg:space-y-16 bg-primary/[.5]">
      <div className="flex flex-col justify-center items-center space-y-4 md:space-y-6 lg:space-y-8">
        <div className="relative w-full text-center">
          <AnimateOnScroll refIndex={2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl">Detailed Listings</h1>
          </AnimateOnScroll>
          <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] absolute top-7 md:top-9 lg:top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.05] w-full whitespace-nowrap">
            Detailed Listings
          </h1>
        </div>
        <AnimateOnScroll refIndex={4}>
          <p className="max-w-lg text-center text-xl">
            Explore every property, every feature and detail.
          </p>
        </AnimateOnScroll>
      </div>
      <div className="flex flex-col justify-center items-center space-y-6 pb-6 w-full max-w-lg lgMd:max-w-[75%] mx-auto">
        {data['listings'].map((listing: Listing) => {
          return (
            <div
              id={`${listing.id}_listing`}
              key={listing.id}
              className="flex flex-col lgMd:flex-row p-5 shadow-lg bg-white w-full rounded-xl overflow-hidden relative gap-5"
            >
              <div className="h-[12rem] w-full lgMd:h-auto lgMd:w-[25%]">
                <div
                  style={{
                    backgroundImage: `url(${listing.image_urls[0]})`,
                  }}
                  className="w-full h-full bg-green/[.2] bg-no-repeat bg-center bg-cover rounded-md"
                ></div>
              </div>
              <div className="flex flex-col space-y-5 w-full lgMd:w-[55%]">
                <div>
                  <div className="flex flex-wrap gap-1 mb-1">
                    <h3 className="font-clash font-semibold text-lg">{listing.name}</h3>
                    <div className="flex items-center flex-shrink-0">
                      {listing.rating &&
                        [...Array(5).keys()].map((rating) => {
                          return rating + 1 <= +listing.rating ? (
                            <Star fontSize="small" key={rating} className="text-primary" />
                          ) : (
                            <Star fontSize="small" key={rating} className="text-black/[.1]" />
                          );
                        })}
                      {listing.reviews && (
                        <span className="text-sm mt-1 flex justify-center items-center">
                          ({listing.reviews})
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm mb-3">{listing.description}</p>
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-start">
                      <div className="flex items-center space-x-1 mr-1">
                        <School className="text-gray-700 text-lg" />
                        <span className="text-sm font-medium text-gray-700 flex-shrink-0">
                          Distance to campus:
                        </span>
                      </div>
                      <div className="flex flex-wrap items-end space-x-1.5 mr-2">
                        {listing.distance.walk && (
                          <div className="flex items-center flex-shrink-0">
                            <DirectionsWalk className="text-gray-700 text-lg" />{' '}
                            <span className="text-sm font-regular">{listing.distance.walk}</span>
                          </div>
                        )}
                        {listing.distance.car && (
                          <div className="flex items-center space-x-1 flex-shrink-0">
                            <DriveEta className="text-gray-700 text-lg" />{' '}
                            <span className="text-sm font-regular">{listing.distance.car}</span>
                          </div>
                        )}
                        {listing.distance.bus && (
                          <div className="flex items-center space-x-1 flex-shrink-0">
                            <DirectionsBus className="text-gray-700 text-lg" />{' '}
                            <span className="text-sm font-regular">{listing.distance.bus}</span>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-green font-semibold cursor-pointer">View Map</p>
                    </div>
                    <div className="flex flex-wrap items-start gap-1">
                      <div className="flex items-center space-x-1">
                        <Apartment className="text-gray-700 text-lg" />
                        <span className="text-sm font-medium text-gray-700">Facilities:</span>
                      </div>
                      <div className="flex flex-wrap items-start">
                        {listing.facilities.map((facility, index) => {
                          return (
                            <span className="text-sm flex-shrink-0 mr-1" key={index}>
                              {facility}
                              {index !== listing.facilities.length - 1 && ','}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-0.5">
                      <div className="bg-secondary text-white px-2 p-1 w-fit text-sm font-medium rounded">
                        {listing.cheapest_period}
                      </div>
                      <div className="bg-secondary text-white px-2 p-1 w-fit text-sm font-medium rounded">
                        {listing.performance}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between items-between w-full lgMd:w-[20%]">
                <div className="flex w-full justify-start lgMd:justify-end">
                  <div className="flex items-center space-x-1.5">
                    <span className="text-sm">From</span>
                    <div>
                      <span className="text-lg font-semibold text-tertiary">
                        {listing.starting_price}
                      </span>
                      <span className="text-sm">/week</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex flex-col space-y-1">
                    {listing.total_price.entire_place && (
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Entire Place</span>
                        <span className="text-sm">{listing.total_price.entire_place}</span>
                      </div>
                    )}
                    {listing.total_price.shared_room && (
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Shared Room</span>
                        <span className="text-sm">{listing.total_price.shared_room}</span>
                      </div>
                    )}
                    {listing.total_price.private_room && (
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Private Room</span>
                        <span className="text-sm">{listing.total_price.private_room}</span>
                      </div>
                    )}
                  </div>
                  <Button fullWidth className="text-black bg-primary">
                    View Rooms
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
