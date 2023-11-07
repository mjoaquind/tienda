import { useContext } from "react";
import CartContext from "../context/cart.context";
import CartTable from "../components/CartTable";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart } = useContext(CartContext);

    if (cart.items.length === 0) return (
        <>
            <h2>El carrito esta vacio</h2>
            <Link to={`/`} className="btn btn-primary">Volver</Link>
        </>
    );
    
    return (
        <>
            <h1>Detalle del Carrito</h1>
            <CartTable cart={cart} />
            <Link to={`/checkout`} className="btn btn-primary">Finalizar Compra</Link>
        </>
    )
}

export default Cart;