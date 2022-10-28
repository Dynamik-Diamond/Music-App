import { Routes, Route } from 'react-router-dom';
import SharedLayout from './component/SharedLayout';
import Home from './pages/Home';
import PlayList from './pages/Playlist';
import Radio from './pages/Radio';
import MusicVideos from './pages/MusicVideos';
import Error from './component/Error';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/playlist" element={<PlayList />} />
        <Route path="/radio" element={<Radio />} />
        <Route
          path="/music-videos"
          element={<MusicVideos />}
        />
        <Route path="/*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default App;
