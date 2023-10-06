import { useState } from "react";

const ItemCounter = ({producto}) => {
    const [count, setCount] = useState(0);

    const incrementar = () => {
        setCount(count+1);
    }

    const decrementar = () => {
        setCount(count-1);
    }

    return(
        <>
        <div>
            <button onClick={decrementar} disabled={count === 0} className="btn btn-primary">-</button>
            <span className="p-3">{count}</span>
            <button onClick={incrementar} disabled={count === producto.stock} className="btn btn-primary">+</button>
        </div>
        </>
    )
}

export default ItemCounter;