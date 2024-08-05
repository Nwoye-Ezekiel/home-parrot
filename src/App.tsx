import Layout from 'components/layout';
import Home from 'components/pages/home';
import About from 'components/pages/about';
import FeaturedListings from 'components/pages/featured-listings';
import DetailedListings from 'components/pages/detailed-listings';

function App() {
  return (
    <div>
      <Layout>
        <Home />
        <About />
        <FeaturedListings />
        <DetailedListings />
      </Layout>
    </div>
  );
}

export default App;
