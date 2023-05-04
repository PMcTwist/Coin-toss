import React, { Component } from 'react';

class Coin extends Component {
    render() {
        return(
            <div className='Coin'>
                <h2>{this.props.info.side}</h2>
                <img src={this.props.info.img} alt={this.props.info.side} />
            </div>
        )
    }
};

export default Coin;