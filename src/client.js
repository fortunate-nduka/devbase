import client from '@sanity/client';

export default client({
  projectId: 'gpaxsn5m',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2022-03-13',
});
