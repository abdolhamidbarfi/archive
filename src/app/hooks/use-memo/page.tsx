import { NextPage } from "next";
import Link from "next/link";


const UseMemoComponent: NextPage = () => {

    return (
        <div className="m-5">
            <h1 className="text-3xl mb-3">useMemo()</h1>
            <ul className="mx-5">
                <li ><Link className="hover:text-blue-800" href="/hooks/use-memo/with-use-memo">With useMemo()</Link></li>
                <li ><Link className="hover:text-blue-800" href="/hooks/use-memo/without-use-memo">Without useMemo()</Link></li>
            </ul>
        </div>
    )
}


export default UseMemoComponent
