import data from 'data/index.json';
import { Listing } from 'components/types';
import {
  DirectionsWalk,
  DriveEta,
  DirectionsBus,
  School,
  Apartment,
  Star,
  StarBorder,
} from '@mui/icons-material';
import { Button } from '@mui/material';

export default function DetailedListings() {
  return (
    <div className="flex flex-col px-20 py-24 space-y-16 bg-secondary/[.5]">
      <div className="flex flex-col justify-center items-center space-y-8">
        <div className="relative w-full text-center">
          <h1 className="text-6xl">Detailed Listings</h1>
          <h1 className="text-7xl absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.05] w-full">
            Detailed Listings
          </h1>
        </div>
        <p className="max-w-lg text-center text-xl">
          Explore every property, every feature and detail.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center space-y-6 pb-6 w-full">
        {data['listings'].map((listing: Listing) => {
          return (
            <div
              id={`${listing.id}_listing`}
              key={listing.id}
              className="flex p-5 shadow-lg bg-white w-[80%] rounded-xl overflow-hidden relative space-x-5"
            >
              <div className="w-[25%]">
                <div
                  style={{
                    backgroundImage: `url(${listing.image_urls[0]})`,
                  }}
                  className="w-full h-full bg-no-repeat bg-center bg-cover rounded"
                ></div>
              </div>
              <div className="flex flex-col space-y-5 w-[55%]">
                <div>
                  <div className="flex space-x-1">
                    <h3 className="font-clash font-semibold text-lg mb-1">{listing.name}</h3>
                    <div>
                      {listing.rating &&
                        [...Array(5).keys()].map((rating) => {
                          return rating + 1 <= +listing.rating ? (
                            <Star fontSize="small" key={rating} className="text-secondary" />
                          ) : (
                            <StarBorder fontSize="small" key={rating} className="text-gray-700" />
                          );
                        })}
                    </div>
                    {listing.reviews && <span className="text-sm mt-1">({listing.reviews})</span>}
                  </div>
                  <p className="text-sm mb-3">{listing.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="flex items-center space-x-1 mr-1">
                        <School className="text-gray-700 text-lg" />
                        <span className="text-sm font-medium text-gray-700 flex-shrink-0">
                          Distance to campus:
                        </span>
                      </div>
                      <div className="flex items-end space-x-1.5 mr-2">
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
                    <div className="flex items-start space-x-2">
                      <div className="flex items-center space-x-1">
                        <Apartment className="text-gray-700 text-lg" />
                        <span className="text-sm font-medium text-gray-700">Facilities:</span>
                      </div>
                      <div className="flex flex-wrap space-x-1 items-start">
                        {listing.facilities.map((facility, index) => {
                          return (
                            <span className="text-sm flex-shrink-0" key={index}>
                              {facility}
                              {index !== listing.facilities.length - 1 && ','}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex space-x-2 pt-0.5">
                      <div className="bg-primary text-white px-2 p-1 w-fit text-sm font-medium rounded">
                        {listing.cheapest_period}
                      </div>
                      <div className="bg-primary text-white px-2 p-1 w-fit text-sm font-medium rounded">
                        {listing.performance}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between items-between w-[20%]">
                <div className="flex w-full justify-end">
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
                  <Button fullWidth color="secondary" className="text-black">
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
