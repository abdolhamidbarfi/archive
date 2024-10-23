"use client"
import { useState } from "react";
import observable from "../Observer";

function useCounter(initial: number = 0) {
    const [count, setCount] = useState(initial)

    const increment = () => {
        observable.notify("Increment successfully")
        setCount(count + 1)
    }
    const decrement = () => {
        observable.notify("Decrement successfully")
        setCount(count - 1)
    }

    return { count, increment, decrement }
}

export default useCounter
