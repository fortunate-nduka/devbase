import { useState, useEffect } from 'react';
import client from '../client';
import Moment from 'react-moment';

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
    <div className='px-2 sm:px-10 md:px-3 py-10 grid gap-x-5 gap-y-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-auto'>
      {posts.map((post) => (
        <div key={post._id} className='rounded-md shadow-2xl'>
          {post.mainImage && post.mainImage.asset && (
            <img
              src={post.mainImage.asset.url}
              alt=''
              className='object-fit h-80 w-full'
            />
          )}
          <div className='bg-white px-3 sm:px-5 py-6 h-auto'>
            <Moment
              fromNow
              className='text-sm font-medium tracking-wider text-gray-500'
            >
              {post.publishedAt}
            </Moment>
            <h2 className='font-black tracking-wide text-2xl pt-3 pb-2'>
              {post.title}
            </h2>
            <div className='flex gap-2 items-center text-sm font-medium tracking-wider pb-3 text-gray-500'>
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
            <p className='text-base font-medium leading-6 pb-6 text-gray-500'>
              {post.description.slice(0, 200)}...
            </p>
            <button className='bg-black py-3 px-6 text-sm font-semibold text-white cursor-pointer tracking-widest shadow-lg'>
              Read more
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Posts;
