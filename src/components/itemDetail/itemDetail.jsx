import React from 'react'

const ItemDetails = ({producto: {title, price, thumbnail}}) => (

    <div style={blq_item_details}>
        <img style={blq_item_details_img} src={thumbnail} alt=""/>
        <div style={blq_item_details_caract}>
            <div>
                <h2>{title}</h2>
                <h2>Price : ${price}</h2>
            </div>
            <div>
                <button style={blq_item_details_btn}>add to cart</button>
                <button style={blq_item_details_btn}>Buy</button>
            </div>
        </div>
        
    </div>
    
)

const blq_item_details ={
    width : '80%',
    margin : '200px auto',
    display : 'flex',
    justifyContent : 'center',
}

const blq_item_details_img = {

}

const blq_item_details_caract = {
    padding : '20px',
    margin : '0px 20px',
    display: 'flex',
    flexDirection : 'column',
    justifyContent : 'space-between',
    alignItems : 'end',
}

const blq_item_details_btn = {
    margin : '0 10px',
}



export default ItemDetails