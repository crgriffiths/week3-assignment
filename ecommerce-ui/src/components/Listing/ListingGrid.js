import React from 'react';
import Listing from './Listing';
import listings from '../../airbnbs.json';
import PropTypes from 'prop-types';

class ListingGrid extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container py-5">
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
      </div>
    )
  }
}

ListingGrid.propTypes = {
  onAddToCart: PropTypes.func
};
export default ListingGrid;