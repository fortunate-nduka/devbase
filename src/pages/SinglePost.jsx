import BlockContent from '@sanity/block-content-to-react';
import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import client from '../client';
import Header from '../components/Header';
import bg from '../assets/11.png';

const SinglePost = () => {
  const [postData, setPostData] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"]{
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
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundAttachment: 'fixed',
        }}
        className='px-5 py-10 md:py-20'
      >
        <BlockContent
          className='prose prose-sm lg:prose-md mx-auto bg-white px-5 py-10 shadow-2xl max-w-4xl'
          blocks={postData.body}
          projectId={client.clientConfig.projectId}
          dataset={client.clientConfig.dataset}
        />
      </div>
    </Fragment>
  );
};
export default SinglePost;
