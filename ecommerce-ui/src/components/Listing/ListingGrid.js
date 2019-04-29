import React from 'react';
import Listing from './Listing';
import listings from '../../airbnbs.json';

class Listing extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="listing-grid">
        {listings.map((listing,idx) => (
          <Listing listing={listing} key={idx} />
        ))}
      </div>
    )
  }
}