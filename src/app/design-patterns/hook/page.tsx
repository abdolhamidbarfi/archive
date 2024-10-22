"use client"
import useCounter from "@/DesignPatterns/Hooks/useCounter";
import { NextPage } from "next";


const Counter: NextPage = () => {

    const { count, increment, decrement } = useCounter(0)

    return (
        <div className="flex justify-center items-center h-lvh">
            <button className="text-3xl p-2 bg-red-500 rounded-md text-gray-50" onClick={decrement}>decrement</button>
            <span className="text-8xl">{`<${count}>`}</span>
            <button className="text-3xl p-2 bg-green-500 rounded-md text-gray-50" onClick={increment}>increment </button>
        </div>
    )
}

export default Counter
