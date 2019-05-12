import React from 'react';
import { ReactComponent as CartIcon } from '../../assets/cart.svg';
import Cart from '../Cart/Cart'
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isCartDisplayed: false
    }
  }

  cartClicked = () => {
    if (this.state.isCartDisplayed) {
      this.setState({isCartDisplayed: false});
    } else {
      this.setState({isCartDisplayed:true});
    }
  }
  render() {
    return (
      <header>
        <div className="container">
          <div className={`d-flex flex-row justify-content-between align-items-center`} >
            <div className="logo">
              <span>eCommerceUI</span>
            </div>
            <div className="cart">
              <div className="d-flex align-items-center">
                <CartIcon onClick={()=>this.cartClicked()}/>
                <p className="m-0 pl-1">({this.props.cartItems})</p>
              </div>
              <div className="cartItems">
                <Cart
                  cartListings={this.props.cartListings}
                  onRemoveFromCart={this.props.onRemoveFromCart}
                  cartTotal={this.props.cartTotal}
                  isCartDisplayed={this.state.isCartDisplayed}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  cartItems: PropTypes.number,
  cartListings: PropTypes.array,
  onRemoveFromCart: PropTypes.func,
  cartTotal: PropTypes.number,
};

export default Header;