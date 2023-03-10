import {render, screen} from "@testing-library/react"
import LoginPage from "."

describe("Login Page", () => {
    it('render input', () => {
        render(<LoginPage/>);

        //checking heading field redering
        const foubitText = screen.getByRole("heading", {
            level: 1
        });
        expect(foubitText).toBeInTheDocument();

        const signInText = screen.getByRole("heading", {
            level: 3,
            name: 'Sign in to access dashboard'
        });
        expect(signInText).toBeInTheDocument();
        
        //checking email field rendering
        const nameElement = screen.getByRole("textbox", {
            name: 'Your email'
        });
        expect(nameElement).toBeInTheDocument();

        //checking password field rendering
        const passElement = screen.getByLabelText('Your password');
        expect(passElement).toBeInTheDocument();

        //checking checkbox field rendering
        const checkBox = screen.getByRole("checkbox");
        expect(checkBox).toBeInTheDocument();

        //button field rendering
        const submitButton = screen.getByRole("button");
        expect(submitButton).toBeInTheDocument();

    })
})