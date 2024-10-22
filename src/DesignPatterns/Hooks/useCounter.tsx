"use client"
import { useState } from "react";


function useCounter(initial : number = 0) {
    const [count, setCount] = useState(initial)

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)

    return {count, increment , decrement}
}

export default useCounter
