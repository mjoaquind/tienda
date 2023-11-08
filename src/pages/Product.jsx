import { useParams } from "react-router-dom";
import useProductosPorID from "../hooks/useProductosPorID";
import ProductDetail from "../components/ProductDetail";

const Product = () => {
    const params = useParams();
    const { item, isLoading } = useProductosPorID(params.id);
    

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (!item) return <div>No hay productos con la id: {params.id}</div>;

    return (
        <div >
            <h2>Producto {item.nombre}</h2>
            <ProductDetail item={item} />
        </div>
    );
}

export default Product;