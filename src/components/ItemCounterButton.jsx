import { useContext, useState } from "react";
import CartContext from "../context/cart.context";


const ItemCounterButton = ({item}) => {
    const { addItem, removeItem } = useContext(CartContext);
    const [count, setCount] = useState(0);

    const incrementar = () => {
        setCount(count+1);
        addItem(item, 1);
    }

    const decrementar = () => {
        setCount(count-1);
        removeItem(item.id);
    }

    return(
        <div>
            <button onClick={decrementar} disabled={count === 0} className="btn btn-primary">-</button>
            <span className="p-3">{count}</span>
            <button onClick={incrementar} disabled={count === item.stock} className="btn btn-primary">+</button>
        </div>
    )
}

export default ItemCounterButton;