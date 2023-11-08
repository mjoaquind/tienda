import { useParams } from "react-router-dom";
import useProductosPorID from "../hooks/useProductosPorID";
import ProductDetail from "../components/ProductDetail";
import { useContext } from "react";
import CartContext from "../context/cart.context";

const Product = () => {
    const params = useParams();
    const { item, isLoading } = useProductosPorID(params.id);
    const { addItem } = useContext(CartContext);

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (!item) return <div>No hay productos con la id: {params.id}</div>;

    return (
        <div >
            <h2>Producto {item.nombre}</h2>
            <ProductDetail item={item} handleClick={addItem} />
        </div>
    );
}

export default Product;