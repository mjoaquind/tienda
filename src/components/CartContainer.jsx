import CartWidget from './CartWidget';
import CartCount from './CartCount';

const CartContainer = () => {
    return (
        <div className='p-2 position-relative'>
            <CartWidget />
            <CartCount count={6} />
        </div>
    )
}

export default CartContainer;