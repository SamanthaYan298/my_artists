function ArtistDetails(props) {

    const {artists} = props;

    return (
        <div className="main-container">
            <div className="photos">
                <img 
                    src={artists.photo_url} 
                    alt={artists.name}
                    style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        objectFit: 'cover'
                    }}
                />
            </div>
            <div className="info">
                <h3>{artists.name}</h3>
                <h4>Country: {artists.country}</h4>
                <h4>Years Active: {artists.years_active}</h4>
            </div>
        </div>
    )
}

export default ArtistDetails;