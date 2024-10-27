"use client"
import { useState } from "react"

function DropdownMenu({ children }: { children: React.ReactNode }) {
    const [open, toggle] = useState(false)

    return (
        <>
            {children}
        </>
    )
}

function Toggle() {

    return (
        <div className="flex flex-col items-center justify-center">
            <span className="bg-gray-800 w-2 h-2 rounded-full mb-1"></span>
            <span className="bg-gray-800 w-2 h-2 rounded-full mb-1"></span>
            <span className="bg-gray-800 w-2 h-2 rounded-full mb-1"></span>
        </div>
    )
}

function List({ children }: { children: React.ReactNode }) {
    return (
        <ul>
            {children}
        </ul>
    )
}

function Item({ children }: { children: React.ReactNode }) {
    return <li>{children}</li>
}

DropdownMenu.Toggle = Toggle
DropdownMenu.List = List
DropdownMenu.Item = Item

export default DropdownMenu