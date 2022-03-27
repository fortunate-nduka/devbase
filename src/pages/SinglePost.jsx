import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import client from '../client';
import Header from '../components/Header';

const SinglePost = () => {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == ${slug}]{
          title,
          slug,
          body,
      }`
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);
  return (
    <Fragment>
      <Header />
      {postData.title && <div className='text-7xl'>{postData.title}</div>}
      <div>{postData.slug}</div>
    </Fragment>
  );
};
export default SinglePost;
