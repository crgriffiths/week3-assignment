import React from 'react';

class CartItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <li>
        <div className="d-flex align-items-center">
          <div className="col-3 px-1">
            <img src={this.props.image}/>
          </div>
          <p className="col-6 px-1">{this.props.title}</p>
          <p className="col-2 px-1">${this.props.cost}</p>
          <button className="remove-listing" onClick={()=> this.props.onRemoveFromCart(this.props.index)}></button>
        </div>
      </li>
    )
  }
}

export default CartItem;