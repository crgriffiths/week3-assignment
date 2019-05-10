import React from 'react';
import ListingImage from './ListingImage';
import ListingDetails from './ListingDetails';

class Listing extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="listing col-md-6 col-lg-4">
        <ListingImage image={this.props.listing.image} alt={this.props.listing.title}/>
        <ListingDetails
          index={this.props.index}
          houseType={this.props.listing.houseType}
          location={this.props.listing.location.city}
          title={this.props.listing.title}
          payment={this.props.listing.payment}
          host={this.props.listing.host}
          rating={this.props.listing.rating}
          onAddToCart ={this.props.onAddToCart}
        />
      </div>
    )
  }
}

export default Listing;