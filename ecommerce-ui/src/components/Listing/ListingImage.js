import React from 'react';
import PropTypes from 'prop-types';

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

ListingImage.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string
};

export default ListingImage;