import { NextPage } from "next";
import Link from "next/link";


const DesignPatterns: NextPage = () => {

    return (

        <>
            <h1 className="text-2xl">Design Patterns</h1>
            <ul>
                <li><Link href="/design-patterns/hoc">Higher Order Components (HOC)</Link></li>
            </ul>
        </>
    )

}

export default DesignPatterns