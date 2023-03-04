import { useState } from "react"

const CounterPage = () => {
    const [count, setCount] = useState<number>(0);
  return (
    <div>
        <h2>
            {count}
        </h2>
        <button onClick={()=> setCount(count + 1)}>increment</button>
    </div>
  )
}

export default CounterPage