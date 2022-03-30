import BlockContent from '@sanity/block-content-to-react';
import {  useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import client from '../client';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from './Loading';
import NotFound from './NotFound';

const SinglePost = ({ loading, setLoading, posts }) => {
  const [postData, setPostData] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    setLoading(true);
    client
      .fetch(
        `*[slug.current == "${slug}"]{
          title,
          slug,
          body,
      }`
      )
      .then((data) => setPostData(data[0]));
    setTimeout(() => {
      setLoading(false);
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return loading ? (
    <Loading />
  ) : !postData ? (
    <NotFound />
  ) : (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <div className='px-5 pt-14 md:pt-20 bg-white'>
        <BlockContent
          className='prose prose-sm lg:prose-base mx-auto max-w-3xl text-black bg-white mb-auto'
          blocks={postData.body}
          projectId={client.clientConfig.projectId}
          dataset={client.clientConfig.dataset}
        />
      </div>
      <Footer />
    </div>
  );
};
export default SinglePost;
