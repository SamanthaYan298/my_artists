function ArtistDetails(props) {

    const {Artists} = props;

    return (
        <div>
            <h3>{Artists.name}</h3>
            <></>
            <h4>Country: {Artists.country}</h4>
            <h4>Yeas Active: {Artists.year}</h4>
        </div>
    )
}

export default ArtistDetails;