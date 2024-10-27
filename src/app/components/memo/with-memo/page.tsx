"use client"
import { NextPage } from "next";
import MemoCounter from "../cmp/MemoCounter";
import MemoHeavyCal from "../cmp/MemoHeavyCal";
import useCounter from "@/DesignPatterns/Hooks/useCounter";


const UseMemoComponent: NextPage = () => {

    const { count, increment, decrement } = useCounter(0)


    return (
        <>
            <MemoCounter {...{ count, increment, decrement }} />
            <MemoHeavyCal />
        </>
    )
}

export default UseMemoComponent
