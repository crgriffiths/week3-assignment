import React from 'react';

class ListingDetails extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="listing-details">
        <div>
          <p>{this.props.houseType} {this.props.location}</p>
        </div>
        <div>
          <h2>{this.props.title}</h2>
        </div>
        <div>
          <h3>{this.props.payment.cost}{}</h3>
        </div>

      </div>
    )
  }
}

export default ListingDetails;