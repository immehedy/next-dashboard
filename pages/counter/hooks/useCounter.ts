import { useState } from 'react';
import { useCounterType } from './useCounter.types';
export const useCounter = ({initialValue = 0} : useCounterType = {}) => {
    const [count, setCount] = useState(initialValue);
    const increment = () => {setCount(count + 1)};
    const decrement = () => {setCount(count - 1)};
    return {count, increment, decrement};
}