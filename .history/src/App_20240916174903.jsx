import { artists } from './best-selling-music-artists';
import ArtistDetails from './components/ArtistDetails';

function App() {

  return (
    <div className="app">
      <div>
        <h1>Best-Selling Music Artists</h1>
      </div>
      <div>
      <ArtistDetails/>
    </div>
  );
}

export default App;
