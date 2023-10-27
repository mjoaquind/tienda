import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import CartContext from "../context/cart.context";

const Cart = () => {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate

    if (cart.productos.length === 0) return (
    <>
        <h2>El carrito esta vacio</h2>
        <button onClick={() => navigate('/')}>Volver</button>
    </>)
}

export default Cart;