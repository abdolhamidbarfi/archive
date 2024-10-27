import { NextPage } from "next";
import Link from "next/link";


const memoComponent: NextPage = () => {

    return (
        <div className="m-5">
            <h1 className="text-3xl mb-3">memo() Component</h1>
            <ul className="mx-5">
                <li ><Link className="hover:text-blue-800" href="/components/memo/with-memo">With <strong>memo()</strong> component</Link></li>
                <li ><Link className="hover:text-blue-800" href="/components/memo/without-memo">Without <strong>memo()</strong> component</Link></li>
            </ul>
        </div>
    )
}


export default memoComponent
