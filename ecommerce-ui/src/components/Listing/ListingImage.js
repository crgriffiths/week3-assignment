import React from 'react';

class ListingImage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="listing-image">
        <img src={this.props.image} alt={this.props.alt} />
      </div>
    )
  }
}

export default ListingImage;