import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom"
import { text } from "stream/consumers";
import Footer from ".";

TODO: 
    // -check for allrights reserved text
    // -check for website name in footer
    // -check for the current date year

describe('Dashboard Footer', () => {
    it('should contain an anchor tag with website name', () => {
        render(<Footer/>)
        expect(screen.getByRole("link")).toHaveTextContent("fourbit.io")
    })
    // it('should contain current year', () => {
    //     const currentYear = new Date().getFullYear() + '';
    //     render(<Footer/>)
    //     expect(screen.getByTestId("curr-year")).toHaveTextContent(currentYear)
    // })
})