import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { formatPrice } from '../helpers';

class Fish extends Component {
  static propTypes = {
    details: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.string,
      desc: PropTypes.string,
      image: PropTypes.string,
    }),
    addToOrder: PropTypes.func,
  };

  render() {
    const { name, price, status, desc, image } = this.props.details;
    const isAvailable = status === 'available';

    return (
      <li className='menu-fish'>
        <img src={image} alt={name} />
        <h3 className='fish-name'>
          {name}
          <span className='price'>{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button
          disabled={!isAvailable}
          onClick={() => this.props.addToOrder(this.props.index)}
        >
          {isAvailable ? 'Add To Cart' : 'Sold Out!'}
        </button>
      </li>
    );
  }
}

export default Fish;
