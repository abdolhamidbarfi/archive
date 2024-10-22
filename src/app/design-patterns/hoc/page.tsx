"use client"
import withClassComponent from "@/DesignPatterns/HOC/withClassComponent";
import withFcComponent from "@/DesignPatterns/HOC/withFcComponent";
import { NextPage } from "next";


const HigherOrderComponent: NextPage = () => {

    return (
        <div className="flex justify-center h-lvh items-center" >
            <h1 className="text-2xl ">Higher Order Components (HOC)</h1>
        </div>
    )
}

// export default withFcComponent(HigherOrderComponent)
export default withFcComponent(HigherOrderComponent)