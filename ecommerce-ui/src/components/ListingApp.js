import React from 'react';
import ListingGrid from './Listing/ListingGrid';
import Header from './Header/Header';
import listings from '../airbnbs.json';

class ListingApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: listings,
      cartListings: [],
      cartTotal: 0,
    }
  }
  addToCart = (index) => {
    const newBooking = this.state.listings[index];
    if (this.state.cartListings.includes(newBooking)) {
      alert('This booking is already in your cart');
      return;
    }
    this.setState((prevState) => ({
      cartListings: prevState.cartListings.concat(listings[index]),
      cartTotal: prevState.cartTotal + listings[index].payment.cost
    }))
  }

  removeFromCart = (index) => {
    const removedBookingCost = this.state.cartListings[index].payment.cost;
    this.setState((prevState) => {
      const cartListings =  [...prevState.cartListings];
      cartListings.splice(index,1);
      const cartTotal =  prevState.cartTotal - removedBookingCost
      return {
        cartListings,
        cartTotal
      }
    })
  }
  
  render() {
    return (
      <div className="ListingApp">
        <Header 
          cartListings={this.state.cartListings}
          cartTotal={this.state.cartTotal}
          onRemoveFromCart={this.removeFromCart}
          cartItems={this.state.cartListings.length}
        />
        <ListingGrid
          listings={this.state.listings}
          onAddToCart={this.addToCart}
        />
      </div>
    );
  }
}

export default ListingApp;
