import React from 'react';

class Listing extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="listing">
        <ListingImage image={listing.image} alt={listing.title}/>
        <ListingDetails 
          houseType={listing.houseType}
          location={listing.location.city}
          title={listing.title}
          payment={listing.payment}
          host={listing.host}
          rating={listing.rating}
        />
      </div>
    )
  }
}

export default Listing;