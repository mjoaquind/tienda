import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/cart.context";

const ProductDetail = ({ item, handleClick }) => {
    const { cart } = useContext(CartContext);

    let disponible = item.stock - (cart.items.find(i => i.item.id === item.id)?.quantity || 0);

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
                        <Link to={'/'} className="btn btn-secondary m-2">Volver</Link>
                        <button onClick={() => handleClick(item, 1)} disabled={disponible === 0 ? true : false} className="btn btn-success m-2">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;