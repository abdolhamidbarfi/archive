"use client"
import { useState } from "react"

interface IInput extends React.HTMLProps<HTMLInputElement> {
    render?: (...args: any) => React.ReactNode
    label?: string
}

const Input: React.FC<IInput> = ({ render, label, ...HTMLInputElementsProps }) => {
    const [value, setValue] = useState("")

    let changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

    return (
        <div className="h-lvh flex justify-center items-center">
            <div className="flex flex-col font-bold">
                <label>{label}</label>
                <input className="border-2 border-indigo-600 rounded-md h-10 w-[500px] px-2" value={value} onChange={changeHandler} {...HTMLInputElementsProps} />
                {render && render({ value })}
            </div>
        </div>
    )
}

export default Input