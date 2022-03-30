import { Fragment } from 'react';
import Header from '../components/Header';
import Posts from '../components/Posts';

const Home = ({ loading, setLoading }) => {
  return (
    <Fragment>
      <Header />
      <Posts loading={loading} setLoading={setLoading} />
    </Fragment>
  );
};
export default Home;
