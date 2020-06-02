import React, { Component } from 'react';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends Component {
  state = {
    fishes: {},
    order: {},
  };

  addFish = fish => {
    console.log('adding a fish!', fish);
    // 1. Take a copy of existing state
    const fishes = { ...this.state.fishes };
    // 2. Add a new fish
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new object fishes to state
    this.setState({ fishes });

    // const newFishes = fishes.push(fish);
    // this.setState(state => {
    // fishes: state.fishes.push(fish);
    // });
  };

  render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market' />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
