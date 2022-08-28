import React from 'react'
import Item from '../item/item'

const ItemList = ({ prod }) => {
    return (
        <div style={item_List_bq}>
            {prod.map((product) => (
                <Item key={product.id} prod={product} />
            ))}
        </div>
    )
}



const item_List_bq = {
    width: '80%',
    heigth: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
}

export default ItemList