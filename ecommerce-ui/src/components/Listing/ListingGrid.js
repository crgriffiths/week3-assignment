import React from 'react';
import Listing from './Listing';
import listings from '../../airbnbs.json';

class ListingGrid extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="listing-grid d-flex row">
        {listings.map((listing,index) => (
          <Listing 
            listing={listing} 
            key={index} 
            index={index}
            onAddToCart ={this.props.onAddToCart}
          />
        ))}
      </div>
    )
  }
}

export default ListingGrid;