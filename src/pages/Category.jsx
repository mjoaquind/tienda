import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import useProductosPorTipo from "../hooks/useProductosPorTipo";
import { useContext } from "react";
import CartContext from "../context/cart.context";

function Category() {
    const params = useParams();
    const { items, isLoading } = useProductosPorTipo(params.tipo);
    const { addItem } = useContext(CartContext);

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (items.length === 0)
        return <div>No hay productos con la catogría: {params.tipo}</div>;

    return (
        <div className="row p-3">
        {items.map((item) => (
            <div key={item.id} className="col-md-3">
                <ProductCard item={item} handleClick={addItem} />
            </div>
        ))}
        </div>
    );
}

export default Category;