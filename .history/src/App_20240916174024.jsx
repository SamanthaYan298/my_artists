import { artists } from './best-selling-music-artists';
import ArtistDetails from './components/ArtistDetails';

function App() {

  return (
    <div className="app">
      <ArtistDetails artists={artists.name}/>
    </div>
  );
}

export default App;
