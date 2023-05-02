import React, { Component } from 'react';
import Coin from './Coin';

class Flipper extends Component {
    constructor(props) {
        super(props);
        this.state = {side: 'heads'};
        this.tosser = this.tosser.bind(this);
    };

    // flip function to update side state
    tosser() {
        let flip = ''
        {(Math.round(Math.random()) === 1) ? flip = 'heads' : flip = 'tails' } 
        this.setState({side: flip});
    };

    // render method to return the object
    render() {
        return(
            <div>
                <h1>Toss a Coin!</h1>
                <Coin upSide={this.state.side}/>
                <button onClick={this.tosser}>Toss!</button>
            </div>
        )
    };
};

export default Flipper;
