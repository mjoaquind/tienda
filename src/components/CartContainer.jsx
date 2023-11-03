import CartWidget from './CartWidget';
import CartCount from './CartCount';
import CartContext from '../context/cart.context';
import { Link } from "react-router-dom";
import { useContext } from 'react';

const CartContainer = () => {
    const { cart } = useContext(CartContext);
    return (
        <div className='p-2 position-relative'>
            <Link to={`/cart`}>
                <CartWidget />
                <CartCount count={cart.items.reduce((acc, curr) => acc + curr.quantity, 0)} />
            </Link>
        </div>
    )
}

export default CartContainer;