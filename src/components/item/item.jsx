import React from 'react'

const Item = ({ prod : { title, price, thumbnail } }) => (
    
    <div style={ productos_cards }>
        <img src={ thumbnail } alt="{key}" style= { productos_cards_img }/>
        <div>
            <h2 style={productos_cards_title }> { title } </h2>
            <h3 style={ productos_cards_price }> Price: <span style= { productos_cards_price_span }> ${ price }</span> </h3>
        </div>
    </div>
    
)

const productos_cards = {
    width: '250px',
    height: '400px',
    padding: '5px',
    margin: '20px',
    boxShadow: '10px 10px 0px #fafafa',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'sapce-between',
    cursor: 'pointer',
    position: 'relative',
}

const productos_cards_img = {
    width: '200px',
    height: '200px',
    margin: 'auto',
    objectFit: 'contain',
}

const productos_cards_title = {
    fontSize: '16px',
    fontWeight: '500',

}

const productos_cards_price = {
    color: '#2a9d8f',
    
}

const productos_cards_price_span = {
    color: '#e76f51',
}


export default Item