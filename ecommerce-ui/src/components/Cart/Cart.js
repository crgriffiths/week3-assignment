import React from 'react';
import CartItem from './CartItem'

class Cart extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={`cartList ${this.props.isCartDisplayed ? 'd-block' : 'd-none'}`}>
        <ul>
          {this.props.cartListings.map((listing, index)=> (
            <CartItem 
              key={index}
              index={index}
              image={listing.image}
              title={listing.title}
              cost={listing.payment.cost}
              onRemoveFromCart={this.props.onRemoveFromCart}
            />
          ))}
        </ul>
        <div className="cartTotal">
          <p>Total Due: ${this.props.cartTotal}</p>
        </div>
      </div>
    )
  }
}

export default Cart;