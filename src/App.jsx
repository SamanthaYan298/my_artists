import { artists } from './best-selling-music-artists';
import ArtistDetails from './components/ArtistDetails';
import Layout from './components/Layout';

function App() {

  const artistsInfo = artists.map(artists => <ArtistDetails key={artists.name} artists={artists}/>)

  return (
    <Layout>
      <div className="app">
        <div>
          <h1>Best-Selling Music Artists</h1>
        </div>
        {artistsInfo}
      </div>
    </Layout>
  );
}

export default App;
