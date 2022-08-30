import React, { useState, useEffect } from 'react'
import ItemList from '../../components/itemList/itemList'

const ItemListContainer = () => {

    const [listaDeProductos, setListaDeProductos] = useState([])
    

    useEffect(() => {

        const productos = async () => {
            try {
                const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=zapatilla_nike')
                let data = await response.json();
                data.results.splice(0,1) //elimino primer objeto ya que se ve mal la foto y la descipcion
                setListaDeProductos(data.results);
            }
            catch(e){
                console.log(e);

            }
        
    }
        
        productos()    
    }, []);

    return (
        <>
            <ItemList prod={listaDeProductos} />
        </>
    )

}

export default ItemListContainer