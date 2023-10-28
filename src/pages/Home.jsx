import ProductCard from "../components/ProductCard";
import useProductos from "../hooks/useProductos";
import { useContext } from "react";
import CartContext from "../context/cart.context";

const Home = () => {
    const { items, isLoading } = useProductos();
    const { addItem } = useContext(CartContext);

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="row p-3">
        {items.map((item) => (
            <div key={item.id} className="col-md-3">
                <ProductCard item={item} handleClick={addItem} />
            </div>
        ))}
        </div>
    );
};

export default Home;