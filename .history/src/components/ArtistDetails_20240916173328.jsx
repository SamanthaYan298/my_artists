function ArtistDetails(props) {

    const {Artists} = props;

    return (
        <div>
            <h3>{Artists.name}</h3>
            <h4>{Artists.country}</h4>
            <h4>{Artists.year}</h4>
        </div>
    )
}