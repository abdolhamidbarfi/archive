

const MemoCounter
    : React.FC<{ count: number, increment: () => void, decrement: () => void }>
    = ({ count, increment, decrement }) => {
        return (
            <div className="flex justify-center items-center h-lvh">
                <button className="text-3xl p-2 bg-red-500 rounded-md text-gray-50" onClick={decrement}>decrement</button>
                <span className="text-8xl">{`<${count}>`}</span>
                <button className="text-3xl p-2 bg-green-500 rounded-md text-gray-50" onClick={increment}>increment </button>
            </div>
        )
    }

export default MemoCounter
