import { NextPage } from "next";
import Link from "next/link";



const Components: NextPage = () => {

    return (
        <div className="m-5">
            <h1 className="text-3xl mb-3">Components</h1>
            <ul className="mx-5">
                <li ><Link className="hover:text-blue-800" href="/components/memo/">memo()</Link></li>
            </ul>
        </div>
    )
}

export default Components
