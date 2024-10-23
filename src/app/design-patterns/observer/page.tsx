"use client"
import useCounter from "@/DesignPatterns/Hooks/useCounter";
import observable from "@/DesignPatterns/Observer";
import { NextPage } from "next";
import { useEffect } from "react";
import { toast } from "react-toastify";


function logger(data: any) {
    console.log(`${Date.now()} - ${data}`)
}

function toastify(data: any) {
    toast(data)
}

observable.add(logger)
observable.add(toastify)

const Observer: NextPage = () => {
    const { count, increment, decrement } = useCounter(0)

    useEffect(() => {
       
        return () => {
            observable.remove(logger)
            observable.remove(toastify)
        }

    }, [])

    return (
        <div className="flex justify-center items-center h-lvh flex-col">
            <div><h1 className="text-5xl font-bold mb-10 text-gray-700">Observers</h1></div>
            <div className="flex items-center">
                <button className="text-3xl p-2 bg-red-500 rounded-md text-gray-50" onClick={decrement}>decrement</button>
                <span className="text-8xl">{`<${count}>`}</span>
                <button className="text-3xl p-2 bg-green-500 rounded-md text-gray-50" onClick={increment}>increment </button>
            </div>
        </div>

    )
}

export default Observer