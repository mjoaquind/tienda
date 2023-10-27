import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCounter from "./ItemCounter"

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
                        <p className="card-text"><strong>Descripción:</strong> {producto[0].descripcion}<br/>
                        <strong>Precio:</strong> ${producto[0].precio}<br/>
                        <strong>Stock:</strong> {producto[0].stock}</p>
                        <ItemCounter producto={producto[0]} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemView;