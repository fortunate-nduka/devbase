import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SinglePost from './pages/SinglePost';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:slug' element={<SinglePost />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
