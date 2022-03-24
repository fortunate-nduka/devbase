import { useState, useEffect } from 'react';
import client from '../client';

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
      body,
      mainImage{
        asset->{_id,url}
      }
    }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className=''>
      {posts.map((post) => (
        <div key={post._id} className=''>
          <h1>{post.title}</h1>
        </div>
      ))}
    </div>
  );
};
export default Posts;
