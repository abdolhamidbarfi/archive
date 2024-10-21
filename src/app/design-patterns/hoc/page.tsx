import { NextPage } from "next";
import Link from "next/link";


const HOC: NextPage = () => {

    return (

        <>
            <h1 className="text-2xl">Higher Order Components (HOC)</h1>
            <ul>
                <li><Link href="/design-patterns/hoc/loading">Loading Component</Link></li>
            </ul>
        </>

    )
}

export default HOC