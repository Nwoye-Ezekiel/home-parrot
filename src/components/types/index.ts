export interface Listing {
  id: number;
  voucher?: string;
  name: string;
  description: string;
  performance: string;
  starting_price: string;
  cheapest_period: string;
  distance: {
    walk?: string;
    car?: string;
    bus?: string;
  };
  facilities: string[];
  image_urls: string[];
  total_price: {
    entire_place?: string;
    shared_room?: string;
    private_room?: string;
  };
  rating: string;
  reviews: number;
  featured: boolean;
}
