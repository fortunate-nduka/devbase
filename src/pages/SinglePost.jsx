import BlockContent from '@sanity/block-content-to-react';
import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import client from '../client';
import Header from '../components/Header';

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
      <div className='px-3 py-10 md:py-10'>
        <BlockContent
          className='prose prose-sm lg:prose-base mx-auto max-w-4xl bg-white px-3 shadow-xl py-14'
          blocks={postData.body}
          projectId={client.clientConfig.projectId}
          dataset={client.clientConfig.dataset}
        />
      </div>
    </Fragment>
  );
};
export default SinglePost;
