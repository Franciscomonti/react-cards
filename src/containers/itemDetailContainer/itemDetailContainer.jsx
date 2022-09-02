import React, { useState, useEffect } from 'react'
import ItemDetails from '../../components/itemDetail/itemDetail'

const ItemDetailContainer = () => {
        const [Item, setItem] = useState([])
        const [load, setLoad] = useState(false)

        const getItem = new Promise((response) => {
            setTimeout(async() =>{
                const itemResponse = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=zapatilla_nike');
                let itemData = await itemResponse.json();
                itemData = itemData.results[3]
                response(itemData);
                setLoad(true);
            },2000)
        })

        useEffect(() =>{

            const itemDetail = async () =>{
                try{
                    let itemData = await getItem;
                    setItem(itemData)
                }catch(e){
                    console.log(e)
                }
            }
        
        itemDetail()
        console.log(Item)
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])

        return <>{load ?<ItemDetails producto={Item} key={Item.id}/> :  <div style={load_blq}><img src={ 'img/spinner.gif'} style={spinner_style} alt="Loading"></img>
        <p>Cargado detalle de producto, aguarde...</p></div>}</>
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

export default ItemDetailContainer