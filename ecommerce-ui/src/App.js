import React from 'react';
import './App.css';
import ListingApp from './components/ListingApp';


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
        <ListingApp/>
      </div>
    );
  }
}

export default App;
