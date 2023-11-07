import { useState } from "react";
import { Link } from "react-router-dom";
const ProductDetail = ({ item, handleClick }) => {

    const [count, setCount] = useState(0);

    const incrementar = () => {
        setCount(count+1);
    }

    const decrementar = () => {
        setCount(count-1);
    }

    return(
        <div className="card">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.img} className="img-fluid rounded-start" alt={item.nombre} />
                </div>
                <div className="col-md-8">
                    <div className="card-body text-center">
                        <h3 className="card-title">{item.tipo} {item.marca} {item.nombre}</h3>
                        <p className="card-text"><strong>Descripción:</strong> {item.descripcion}<br/>
                        <strong>Precio:</strong> ${item.precio}<br/>
                        <strong>Stock:</strong> {item.stock}</p>
                    </div>
                    <div className="card-body text-center">
                        <Link to={'/'} className="btn btn-secondary">Volver</Link>
                        <button onClick={decrementar} disabled={count === 0} className="btn btn-primary">-</button>
                        <span className="p-3">{count}</span>
                        <button onClick={incrementar} disabled={count === item.stock} className="btn btn-primary">+</button>
                        <button onClick={() => handleClick(item, count)} disabled={count === 0} className="btn btn-success">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;