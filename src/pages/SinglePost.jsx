import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import client from '../client';

const SinglePost = () => {
  const [postData, setPostData] = useState([]);

  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug
      }`
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);
  return <div>{postData.title}</div>;
};
export default SinglePost;
