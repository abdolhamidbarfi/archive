"use client"
import Input from "@/DesignPatterns/RenderProps/Input";
import { NextPage } from "next";



const RenderProps: NextPage = () => {
    return (
        <>
            <Input
                label="Discription"
                render={({ value }) => <p>{value}</p>}
            />
        </>
    )
}

export default RenderProps