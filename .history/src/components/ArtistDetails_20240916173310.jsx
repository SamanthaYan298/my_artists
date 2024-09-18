function ArtistDetails(props) {

    const {Artists} = props;

    return (
        <div>
            <h3>{Artists.name}</h3>
            <h4>{Artists.}</h4>
        </div>
    )
}