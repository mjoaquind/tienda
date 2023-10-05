import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import { getProductos } from "../data/producto"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProductos().then((productos) => {
            setProductos(productos);
        });
    }, []);

    if (!productos.length) return <h1>Cargando...</h1>

    return (
        <div className="row g-4">
        { productos.map((producto) => (
            <div key={producto.id} className="col-md-3">
                <div  className="card">
                    <img src={producto.img} className="card-img-top" alt={producto.nombre} />
                    <div className="card-body text-center">
                        <h5 className="card-title">{producto.tipo} {producto.marca} {producto.nombre}</h5>
                        <p className="card-text">Precio: ${producto.precio}</p>
                        <Link to={`/item/${producto.id}`} className="btn btn-primary">Detalle</Link>
                    </div>
                </div>
            </div>
        ))}
        </div>
    )
}

export default ItemListContainer;