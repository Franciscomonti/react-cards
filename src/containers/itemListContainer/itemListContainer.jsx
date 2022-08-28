import React, { useState, useEffect } from 'react'
import ItemList from '../../components/itemList/itemList'

const ItemListContainer = () => {

    const [listaProductos, setProductos] = useState([])

    useEffect(() => {
        const productosCards = async () => {
            try {
                const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=zapatilla_nike')
                let data = await response.json();
                data.results.splice(0,1) //elimino primer objeto ya que se ve mal la foto y la descipcion
                setProductos(data.results);
            }
            catch(e){
                console.log(e);

            }setTimeout( ()=>{console.log("demora")}, "2000" )
        
    }
        
        productosCards()    
    }, []);

    return (
        <>
            <ItemList prod={listaProductos} />
        </>
    )

}

export default ItemListContainer