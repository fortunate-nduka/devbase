import { Fragment } from 'react';
import Header from '../components/Header';
import Posts from '../components/Posts';

const Home = ({posts, setPosts}) => {
  return (
    <Fragment>
      <Header />
      <Posts posts={posts} setPosts={setPosts} />
    </Fragment>
  );
};
export default Home;
