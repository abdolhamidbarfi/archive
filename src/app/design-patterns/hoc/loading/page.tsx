import withLoading from "@/DesignPatterns/HOC/withLoading";
import exp from "constants";
import { NextPage } from "next";
import Link from "next/link";


const Loading: NextPage = () => {

    const LoadingComponent = ({ loading }: { loading: boolean }) => {

        console.log(loading)
        return loading ? <p>Loading ... </p> : <p>Hello World</p>
    }

    withLoading(LoadingComponent)
    
    return (
        <>
            <h1 className="text-2xl">Loading Component</h1>
           
        </>

    )

}

export default Loading