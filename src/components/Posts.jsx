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
    <div className='px-5 py-10 bg-[#f3f4f5]'>
      {posts.map((post) => (
        <div key={post._id} className='shadow-2xl rounded-md'>
          {post.mainImage && post.mainImage.asset && (
            <img
              src={post.mainImage.asset.url}
              alt=''
              className='rounded-tl-md rounded-tr-md'
            />
          )}
          <div className='bg-white px-3 py-5'>
            <Moment dateToFormat={post.publishedAt} fromNow />
            <h2 className='font-black text-2xl'>{post.title}</h2>
            <div className=''>
              {/* By
              {post.author.image && post.author.image.asset && (
                <img src={post.author.asset.url} alt='' />
              )} */}
            </div>
            <p>{post.description.slice(0, 200)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Posts;
