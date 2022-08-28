import React from 'react'

function cartWidget() {
    return (
        <div style={nav_cart_container}>
            <img src= {'/img/cart vacio.svg'} alt="icon-cart-vacio" style={style_nav_cart_img}/>
            <span style={style_nav_cart_span}>0</span>
        </div>
    )
}

export default cartWidget



const nav_cart_container = {
    position: "relative",
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
}

const style_nav_cart_img = {
    width: "30px",
    height: "30px",
    position: "relative",
}

const style_nav_cart_span = {
    width: "17px",
    height: "17px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "2px",
    right: "2px",
    zIndex: 100,
    
    borderRadius: "50px",
    backgroundColor: "black",
    border: "solid 0.3px black",
    
    color:"white",
    fontSize: "14px",
    lineHeight: "0px",
    textAlign: "center",
}

