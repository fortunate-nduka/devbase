import { Fragment } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Posts from '../components/Posts';

const Home = ({ loading, setLoading }) => {
  return (
    <Fragment>
      <Header />
      <Posts loading={loading} setLoading={setLoading} />
      <Footer />
    </Fragment>
  );
};
export default Home;
