import { Link } from "react-router-dom";
const ProductCard = ({ item, handleClick, children }) => {

    return(
        <div  className="card">
            <img src={item.img} className="card-img-top" alt={item.nombre} />
            <div className="card-body text-center">
                <h5 className="card-title">{item.tipo} {item.marca} {item.nombre}</h5>
                <p className="card-text"><strong>Descripción:</strong> {item.descripcion}<br/>
                <strong>Precio:</strong> ${item.precio}<br/>
                <strong>Stock:</strong> {item.stock}</p>
                {children}
                <Link to={`/item/${item.id}`} className="btn btn-primary">Detalles</Link>
                <button className="btn btn-primary" onClick={() => handleClick(item, 1)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ProductCard;