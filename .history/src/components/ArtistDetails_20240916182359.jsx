function ArtistDetails(props) {

    const {artists} = props;

    return (
        <div className="main-containter">
            <div className="photos">
                <img 
                    src={artists.photo_url} 
                    alt={artists.name}
                    style={{
                        width: '110px',
                        height: '110px',
                        borderRadius: '50%',
                        objectFit: 'cover'
                    }}
                />
            </div>
            <div className="info">
            <h3 className="names">{artists.name}</h3>
            <p>Country: {artists.country}</p>
            <p>Years Active: {artists.years_active}</p>
            </div>
        </div>
    )
}

export default ArtistDetails;