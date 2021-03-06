import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import { formatPrice } from '../helpers';

class Order extends Component {
  static propTypes = {
    fishes: PropTypes.object,
    order: PropTypes.object,
    deleteItemFromOrder: PropTypes.func,
  };

  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === 'available';
    const transitionOptionsOrder = {
      classNames: 'order',
      key,
      timeout: { enter: 500, exit: 500 },
    };
    const transitionOptionsCount = {
      classNames: 'count',
      key: count,
      timeout: { enter: 500, exit: 500 },
    };

    if (!fish) return null;

    if (!isAvailable) {
      return (
        <CSSTransition {...transitionOptionsOrder}>
          <li key={key}>Sorry, {fish.name} is no longer available</li>
        </CSSTransition>
      );
    }
    return (
      <CSSTransition {...transitionOptionsOrder}>
        <li key={key}>
          <span>
            <TransitionGroup component='span' className='count'>
              <CSSTransition {...transitionOptionsCount}>
                <span>{count} </span>
              </CSSTransition>
            </TransitionGroup>
            pcs {fish ? fish.name : 'fish'} {formatPrice(fish.price * count)}
          </span>
          <button onClick={() => this.props.deleteItemFromOrder(key)}>
            &times;
          </button>
        </li>
      </CSSTransition>
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
        <TransitionGroup component='ul' className='order'>
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>
        <div className='total'>
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
