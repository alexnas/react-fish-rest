import React, { Component } from 'react';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

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
  };

  loadSampleFishes = () => {
    console.log('Loading sample fishes', sampleFishes);
    this.setState({
      fishes: sampleFishes,
    });
  };

  render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market' />
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
