import {render, screen} from "@testing-library/react"
import Skills from "."

describe('testing skills', () => {
    const skills = ['html', 'CSS', 'Next js']
    it('reder skills', () => {
        render(<Skills skills={skills}/>)
        const listElement = screen.getByRole("list")
        expect(listElement).toBeInTheDocument();
    })
    it('render each item in the list', () => {
        render(<Skills skills={skills}/>)
        const listItems = screen.getAllByRole("listitem");
        expect(listItems).toHaveLength(skills?.length);
    })

    it('render login button', () => {
        render(<Skills skills={skills}/>);
        const logInBtn = screen.getByRole("button", {
            name: 'log in'
        })
        expect(logInBtn).toBeInTheDocument();
    })
    it('render login button', async () => {
        render(<Skills skills={skills}/>);
        const seeDataBtn = await screen.findByRole("button", {
            name: 'see data'
        },
        {
            timeout: 3000
        })
        expect(seeDataBtn).toBeInTheDocument();
    })
})