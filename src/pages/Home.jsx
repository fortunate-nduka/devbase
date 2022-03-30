import { Fragment } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Posts from '../components/Posts';

const Home = ({ loading, setLoading, posts, setPosts }) => {
  return (
    <Fragment>
      <Header />
      <Posts
        loading={loading}
        setLoading={setLoading}
        posts={posts}
        setPosts={setPosts}
      />
      {posts && <Footer />}
    </Fragment>
  );
};
export default Home;
