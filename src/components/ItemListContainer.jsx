import { useEffect, useState } from "react"
import { getProductos } from "../data/producto"
import ItemList from "./ItemList"

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProductos().then((productos) => {
            setProductos(productos);
        });
    }, []);

    if (!productos.length) return <h1>Cargando...</h1>

    return (
        <div className="container">
            <h1>{greeting}</h1>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer;