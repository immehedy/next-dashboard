import {render, screen} from "@testing-library/react"
import user from "@testing-library/user-event"
import CounterPage from "."


describe('counter', () => {
    it('renders counts', () => {
        render(<CounterPage/>);
        const counterElement = screen.getByRole("heading");
        expect(counterElement).toBeInTheDocument();
    })
    it('render button', () => {
        render(<CounterPage/>);
        const buttonElement = screen.getByRole("button", {
            name: 'increment'
        })
        expect(buttonElement).toBeInTheDocument();
    })
    it('initial value 0', () => {
        render(<CounterPage/>);
        const initialValue = screen.getByRole("heading")
        expect(initialValue).toHaveTextContent("0");
    })
    it('increase value from 0 to 1', async () => {
        render(<CounterPage/>)
        const incrementBtn = screen.getByRole("button", {
            name: 'increment'
        })
        await user.click(incrementBtn);
        const renderedElement = screen.getByRole("heading")
        expect(renderedElement).toHaveTextContent("1");
    })
    it('increase value from 0 to 2 after clicking twice', async () => {
        render(<CounterPage/>);
        const incrementBtn = screen.getByRole("button", {
            name: 'increment'
        });
        await user.click(incrementBtn);
        await user.click(incrementBtn);
        const renderedElement = screen.getByRole("heading");
        expect(renderedElement).toHaveTextContent("2")
    })
})