import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Category from './pages/Category';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SinglePost from './pages/SinglePost';

function App() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  return (
    <Routes>
      <Route
        path='/'
        element={<Home loading={loading} setLoading={setLoading} posts={posts} setPosts={setPosts} />}
      />
      <Route
        path='/category/:slug'
        element={<Category loading={loading} setLoading={setLoading} />}
      />
      <Route
        path='/:slug'
        element={<SinglePost loading={loading} setLoading={setLoading} />}
      />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
