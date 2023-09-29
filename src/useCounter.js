import { useState } from "react"

export const useCounter = (initial = 0, min, max) => {
    if(initial < min || initial > max) initial = min;

    const [counter, SetCounter] = useState(initial);

    const decrement = () => {
        if(counter > min) SetCounter((prev) => prev - 1)
    }

    const increment = () => {
        if(counter > min) SetCounter((prev) => prev + 1)
    }

    const reset = () => {
        SetCounter(initial)
    }

    return {counter, decrement, increment, reset}
}