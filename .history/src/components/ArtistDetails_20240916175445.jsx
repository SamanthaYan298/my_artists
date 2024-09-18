function ArtistDetails(props) {

    const {artists} = props;

    return (
        <div>
            <h3>{artists.name}</h3>
            <img src={artists.photo_url} alt={artists.name} 
                height={}
            />
            <h4>Country: {artists.country}</h4>
            <h4>Years Active: {artists.years_active}</h4>
        </div>
    )
}

export default ArtistDetails;