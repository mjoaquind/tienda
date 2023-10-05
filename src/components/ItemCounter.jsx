import { useEffect, useState } from "react";
import { useCounter } from "./useCounter";

const ItemCounter = () => {
    const [count, setCount] = useState(0);

    const incrementar = () => {
        setCount(count+1);
    }

    const decrementar = () => {
        setCount(count-1);
    }

    return(
        <div>
            <button onClick={decrementar} className="btn btn-primary">-</button>
            <span className="p-3">{count}</span>
            <button onClick={incrementar} className="btn btn-primary">+</button>
        </div>
    )
}

export default ItemCounter;