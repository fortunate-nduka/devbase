import { useState, useEffect } from 'react';
import client from '../client';
import Moment from 'react-moment';
import { FiChevronRight } from 'react-icons/fi';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
    *[_type == "post"]{
      _id,
      title,
      slug,
      description,
      body,
      publishedAt,
      author->{
        name,image{
          asset->{url}}
        },
      mainImage{
        asset->{_id,url}
      },
    }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className='bg-[#f3f4f6] px-3 sm:px-10 md:px-5 lg:px-10 xl:px-5 py-10 grid gap-x-5 gap-y-14 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 h-auto'>
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
            <Moment
              fromNow
              className='font-medium tracking-wider text-gray-400'
            >
              {post.publishedAt}
            </Moment>
            {post.title.length >= 50 ? (
              <h2 className='font-black tracking-wide text-2xl pt-3 pb-2'>
                {post.title.slice(0, 50)}...
              </h2>
            ) : (
              <h2 className='font-black tracking-wide text-2xl pt-3 pb-2'>
                {post.title}
              </h2>
            )}

            <div className='flex gap-2 items-center tracking-wider pb-3 text-gray-400'>
              By
              {post.author.image && post.author.image.asset && (
                <img
                  src={post.author.image.asset.url}
                  alt=''
                  className='w-8 rounded-full'
                />
              )}
              <div className=''>{post.author.name}</div>
            </div>
            <p className='leading-6 font-medium pb-6 text-gray-600'>
              {post.description.slice(0, 200)}...
            </p>
            <button className='bg-black py-3 px-6 text-sm font-semibold text-white cursor-pointer tracking-widest shadow-lg flex items-center gap-2'>
              Read more <FiChevronRight />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Posts;
