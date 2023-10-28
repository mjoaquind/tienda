import { useContext } from "react"
import CartContext from "../context/cart.context";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart } = useContext(CartContext);

    if (cart.items.length === 0) return (
    <>
        <h2>El carrito esta vacio</h2>
        <Link to={`/`} className="btn btn-primary">Volver</Link>
    </>)
}

export default Cart;