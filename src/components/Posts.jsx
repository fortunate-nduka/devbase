import { useState, useEffect } from 'react';
import client from '../client';
import Moment from 'react-moment';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
    *[_type == "post"] | order(_createdAt asc){
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
  }, []);

  return (
    <div className='px-5 sm:px-10 md:px-5 lg:px-10 xl:px-5 py-10 grid gap-x-5 gap-y-14 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 h-auto max-w-[100rem] mx-auto'>
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

            {/* <div className='flex gap-2 items-center tracking-widest pb-5 text-gray-500'>
              By
              {post.author.image && post.author.image.asset && (
                <img
                  src={post.author.image.asset.url}
                  alt=''
                  className='w-8 rounded-full'
                />
              )}
              <div className=''>{post.author.name}</div>
            </div> */}
            <p className='leading-[27px]  pb-6 font-medium'>
              {post.description.slice(0, 150)}...
            </p>
            <Link to={`/${post.slug.current}`}>
              <button className='bg-black py-3 px-6 text-sm font-semibold text-white cursor-pointer tracking-widest shadow-lg flex items-center gap-2'>
                Read more <FiChevronRight />
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Posts;
