import { NextPage } from "next";
import Link from "next/link";


const DesignPatterns: NextPage = () => {

    return (

        <div className="m-5">
            <h1 className="text-3xl mb-3">Design Patterns</h1>
            <ul className="mx-5">
                <li ><Link className="hover:text-blue-800" href="/design-patterns/hoc">Higher Order Components (HOC)</Link></li>
                <li ><Link className="hover:text-blue-800" href="/design-patterns/hook">Define Hooks</Link></li>
                <li ><Link className="hover:text-blue-800" href="/design-patterns/render-props">Render Props</Link></li>
                <li ><Link className="hover:text-blue-800" href="/design-patterns/observer">Observer</Link></li>
                <li ><Link className="hover:text-blue-800" href="/design-patterns/compound">Compound</Link></li>
            </ul>
        </div>
    )

}

export default DesignPatterns
