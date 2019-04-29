import React from 'react';
import { ReactComponent as Cart } from '../../assets/shopping-cart-empty-side-view-svgrepo-com.svg';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <header className={`d-flex flex-row`}>
        <div className="logo">
          <span>eCommerceUI</span>
        </div>
        <div className="cart">
          <Cart />
        </div>
      </header>
    )
  }
}

export default Header;