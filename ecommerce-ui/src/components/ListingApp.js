import React from 'react';
import ListingGrid from './components/Listing/ListingGrid';
import Header from './components/Header/Header';
import listings from '../airbnbs.json';

class ListingApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
      cartListings: [],
      cartTotal: 0,
    }
  }
  
  
  render() {
    return (
      <div className="ListingApp">
        <Header />
        <ListingGrid/>
      </div>
    );
  }
}

export default ListingApp;
