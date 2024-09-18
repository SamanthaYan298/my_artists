import { artists } from './best-selling-music-artists';
import ArtistDetails from './components/ArtistDetails';

function App() {

  const artistsInfo = artists.map(artists => <ArtistDetails key={artists.name} />)

  return (
    <div className="app">
      <div>
        <h1>Best-Selling Music Artists</h1>
      </div>
      {artistsInfo}
    </div>
  );
}

export default App;
