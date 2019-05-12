import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import ListingApp from './components/ListingApp';


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className={`App`}>
        <ListingApp/>
      </div>
    );
  }
}

export default App;
