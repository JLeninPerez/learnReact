import React from 'react'

function Currencies (props) {
    const { bpi } = props.bpi
    const currencies = Object.keys(bpi)

    return currencies.map(currency => (              
        <div key={currency}>
            1 BTC is <strong>{ bpi[currency].rate }</strong>
            <span>{currency}</span>                    
        </div>           
    ))
}

const BitcointPrice = (bpi) => (
    <div>
        <h4>Bitcoin Price</h4>
        <Currencies bpi = { bpi }></Currencies>                
    </div>
)

export default BitcointPrice