import Footer from '../components/Footer';
import Header from '../components/Header';
import Posts from '../components/Posts';

const Home = ({ loading, setLoading, posts, setPosts }) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <Posts
        loading={loading}
        setLoading={setLoading}
        posts={posts}
        setPosts={setPosts}
      />
      <Footer />
    </div>
  );
};
export default Home;
