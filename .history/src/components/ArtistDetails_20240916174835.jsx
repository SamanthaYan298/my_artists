function ArtistDetails(props) {

    const {artists} = props;

    return (
        <div>
            <h3>{artists.name}</h3>
            <img src={artists.photo_url} alt={artists.name}/>
            <h4>Country: {artists.country}</h4>
            <h4>Yeas Active: {artists.year}</h4>
        </div>
    )
}

export default ArtistDetails;