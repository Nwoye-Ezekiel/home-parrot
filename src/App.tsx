import Home from 'components/pages/home';
import About from 'components/pages/about';
import FeaturedListings from 'components/featured-listings';
import DetailedListings from 'components/detailed-listings';

function App() {
  return (
    <div>
      <Home />
      <About />
      <FeaturedListings />
      <DetailedListings />
    </div>
  );
}

export default App;
