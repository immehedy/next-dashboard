import { act, renderHook } from "@testing-library/react"
import { useCounter } from "./useCounter"

describe('useCounter hook testing', () => {
    it('render initial value', () => {
        const {result} = renderHook(useCounter)
        expect(result.current.count).toBe(0);
    })
    it('should display same count from props', () => {
        const {result} = renderHook(useCounter, {
            initialProps:{
                initialValue: 10
            }
        })
        expect(result?.current?.count).toBe(10);
    });
    it('should increment by 1', () => {
        const {result} = renderHook(useCounter);
        act(() => result?.current?.increment());
        expect(result?.current?.count).toBe(1);
    })
    it('should decrese by 1', () => {
        const {result} = renderHook(useCounter);
        act(() => result?.current?.decrement());
        expect(result?.current?.count).toBe(-1);
    })
})