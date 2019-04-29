import React from 'react';
import ListingImage from './ListingImage';
import ListingDetails from './ListingDetails';

class Listing extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="listing">
        <ListingImage image={this.props.listing.image} alt={this.props.listing.title}/>
        <ListingDetails 
          houseType={this.props.listing.houseType}
          location={this.props.listing.location.city}
          title={this.props.listing.title}
          payment={this.props.listing.payment}
          host={this.props.listing.host}
          rating={this.props.listing.rating}
        />
      </div>
    )
  }
}

export default Listing;