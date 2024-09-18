import { artists } from './best-selling-music-artists';
import ArtistDetails from './components/ArtistDetails';

function App() {

  const artistsInfo = artists.map(artists => <artists key={artists.name} />)

  return (
    <div className="app">
      <div>
        <h1>Best-Selling Music Artists</h1>
      </div>
      <ArtistDetails/>
    </div>
  );
}

export default App;
