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
          <p>{this.props.payment.cost}{this.props.payment.description.length > 0 ? ` ${this.props.payment.description.length}` : ""}</p>
        </div>
        <div>
          <p><span>{this.props.rating.stars} out of 5 ({this.props.rating.reviews}){this.props.host.isSuperhost ? "  \u2022 Superhost" : ""}</span></p>
        </div>
      </div>
    )
  }
}

export default ListingDetails;