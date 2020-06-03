import React, { Component } from 'react';

import { formatPrice } from '../helpers';

class Order extends Component {
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === 'available';

    if (!fish) return null;

    if (!isAvailable) {
      return <li key={key}>Sorry, {fish.name} is no longer available</li>;
    }
    return (
      <li key={key}>
        {count} lbs {fish ? fish.name : 'fish'}{' '}
        {formatPrice(fish.price * count)}
      </li>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      if (isAvailable) {
        return prevTotal + count * fish.price;
      } else {
        return prevTotal;
      }
    }, 0);
    return (
      <div className='order-wrap'>
        <h2>Order</h2>
        <ul className='order'>{orderIds.map(this.renderOrder)}</ul>
        <div className='total'>
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
