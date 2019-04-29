import React from 'react';
import ListingGrid from './components/Listing/ListingGrid';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ListingGrid/>
    </div>
  );
}

export default App;
