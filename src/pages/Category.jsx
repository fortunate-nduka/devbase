import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import client from '../client';
import Moment from 'react-moment';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import Footer from '../components/Footer';
import NotFound from './NotFound';

const Category = ({ loading, setLoading }) => {
  const [posts, setPosts] = useState([]);

  const { slug } = useParams();

  useEffect(() => {
    setLoading(true);
    client
      .fetch(
        `*['${slug}' in categories[]->title] | order(_createdAt desc){
        _id,
      title,
      slug,
      description,
      body,
      publishedAt,
      "name": author->name,
      mainImage{
        asset->{_id,url}
      },
}`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return loading ? (
    <Loading />
  ) : posts.length < 1 ? (
    <NotFound />
  ) : (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <div className='px-5 sm:px-10 md:px-5 lg:px-10 xl:px-5 pt-10 grid gap-x-5 gap-y-14 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 h-auto max-w-[100rem] mx-auto mb-auto'>
        {posts.map((post) => (
          <div key={post._id} className='bg-white rounded-md shadow-2xl'>
            {post.mainImage && post.mainImage.asset && (
              <img
                src={post.mainImage.asset.url}
                alt=''
                className='object-cover h-80 w-full rounded-tr-md rounded-tl-md'
              />
            )}
            <div className='px-3 sm:px-5 py-6 border-t-[1px] border-gray-300'>
              <div className='flex items-center gap-4 text-xs font-medium'>
                <Moment fromNow className=''>
                  {post.publishedAt}
                </Moment>{' '}
                {' - '}
                <div className=''>{post.name}</div>
              </div>
              {post.title.length >= 50 ? (
                <h2 className='font-black tracking-wide text-2xl pt-4 pb-4'>
                  {post.title.slice(0, 50)}...
                </h2>
              ) : (
                <h2 className='font-black tracking-wide text-xl lg:text-2xl pt-4 pb-4'>
                  {post.title}
                </h2>
              )}
              <p className='leading-[27px] text-black pb-6 font-medium'>
                {post.description.slice(0, 150)}...
              </p>
              <Link to={`/${post.slug.current}`}>
                <button className='bg-[rgba(0,0,0,.9)] py-3 px-6 text-sm font-semibold text-white cursor-pointer tracking-widest shadow-lg flex items-center gap-2'>
                  Read more <FiChevronRight />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
export default Category;
