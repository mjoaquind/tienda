import { useEffect, useState } from "react";
import { getProductoPorID } from "../data/producto";
import { useParams } from "react-router-dom";

const ItemView = () => {

    const [producto, setProducto] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getProductoPorID(id).then((producto) => {
            setProducto(producto);
        });
    }, []);

    if(!producto) {
        return <h1>Cargando ...</h1>
    }


    return(
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={producto[0].img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{producto[0].tipo} {producto[0].marca} {producto[0].nombre}</h5>
                        <p className="card-text">{producto[0].descripcion}</p>
                        <p className="card-text">Precio: ${producto[0].precio}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemView;