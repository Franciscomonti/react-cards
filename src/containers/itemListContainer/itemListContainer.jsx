import React, { useState, useEffect } from 'react'
import ItemList from '../../components/itemList/itemList'


const ItemListContainer = () => {

    const [listaDeProductos, setListaDeProductos] = useState([])
    const [load, setLoad] = useState(false)
    
    const promesa = new Promise((respoonse)=>{
        setTimeout(async() => {
            const dataResponse = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=zapatilla_nike');
            let data = await dataResponse.json();
            setLoad(true);
            respoonse(data);
        },2000);
    });


    useEffect(() => {

        const productos = async () => {
            try {
                const data = await promesa;
                data.results.splice(0,1) //elimino primer objeto ya que se ve mal la foto y la descipcion
                setListaDeProductos(data.results);
            }
            catch(e){
                console.log(e);
            } 
    };
        
        productos()    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return <>{load ? <ItemList prod={listaDeProductos} /> : <div style={load_blq}><img src={ 'img/spinner.gif'} style={spinner_style} alt="Loading"></img>
    <p>Estamos Cargando tu Proxima Compra...</p></div>} </>

}


const load_blq = {
    display: 'flex',
    flexDirection: "column",
    margin: "300px auto",
    width: "400px",
    alignItems: "center",
}
const spinner_style = {
    width: "200px",
    objectFit: "cover",
}
export default ItemListContainer