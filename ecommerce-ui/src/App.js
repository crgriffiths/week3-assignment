import React from 'react';
import ListingGrid from './components/Listing/ListingGrid';
import Header from './components/Header/Header';
import './App.css';
import listings from './airbnbs.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
      cartListings: []
    }
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <ListingGrid/>
      </div>
    );
  }
}

export default App;
