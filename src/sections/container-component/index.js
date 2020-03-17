import React, { Component } from 'react';
import BitcointPrice from './presentational.js'

class BitcointPriceContainer extends Component {

    state = { bpi : {} }

    componentDidMount () {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(res => res.json())
        .then(data => {            
            const { bpi } = data
            this.setState({ bpi })      
        })    
    }

    render () {
        return (
            <BitcointPrice bpi = {this.state.bpi }></BitcointPrice>
        )
    }
    
}

export default BitcointPriceContainer;
