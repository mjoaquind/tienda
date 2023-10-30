import { useParams } from "react-router-dom";
import useProductosPorID from "../hooks/useProductosPorID";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import CartContext from "../context/cart.context";
import ItemCounterButton from "../components/ItemCounterButton";

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
            <ProductCard item={item} handleClick={addItem}>
                <ItemCounterButton item={item} />
            </ProductCard>
        </div>
    );
}

export default Product;