import React, { Component } from 'react';
import Coin from './Coin';

import tails from './tails.png';
import heads from './heads.png';

class Flipper extends Component {
    static defaultProps = {
        coin: [
            { side: 'heads', img: heads },
            { side: 'tails', img: tails },
        ]
    };

    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            numFlips: 0,
            numHeads: 0,
            numTails: 0
        };
        this.clicked = this.clicked.bind(this);
    };

    // flip function to update side state
    tosser() {
        const flip = Math.round(Math.random())
        const flippedCoin = this.props.coin[flip]

        this.setState(currState => {
            return{
                currCoin: flippedCoin,
                numFlips: currState.numFlips + 1,
                numHeads: currState.numHeads + ((flippedCoin.side === 'heads') ? 1 : 0),
                numTails: currState.numTails + ((flippedCoin.side === 'tails') ? 1 : 0)
            }
        });
    };

    // Grab the click event
    clicked(e) {
        this.tosser();
    };

    // render method to return the object
    render() {
        return(
            <div>
                <h1>Toss a Coin!</h1>

                {this.state.currCoin  && <Coin info={ this.state.currCoin }/>}

                <button onClick={this.clicked}>Toss!</button>

                <p>
                    Flips: { this.state.numFlips }<br/>
                    Heads: { this.state.numHeads }<br/>
                    Tails: { this.state.numTails }<br/>
                </p>
            </div>
        )
    };
};

export default Flipper;
