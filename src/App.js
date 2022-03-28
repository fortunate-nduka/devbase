import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SinglePost from './pages/SinglePost';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path='/:slug'
        element={
          <SinglePost loading={loading} setLoading={setLoading}/>
        }
      />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
