import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom"
import Footer from "@/components/Layouts/Footer";
import { text } from "stream/consumers";

TODO: 
    // -check for allrights reserved text
    // -check for website name in footer
    // -check for the current date year

describe('Dashboard Footer', () => {
    it('should render properly', () => {
        render(<Footer/>)
        const body = screen.getByText('All Rights Reserved')
        const headerText = 'All Rights Reserved'
        expect(body).toHaveTextContent(headerText);
    })
    it('should contain an anchor tag with website name', () => {
        render(<Footer/>)
        expect(screen.getByRole("link")).toHaveTextContent("fourbit.io")
    })
    it('should contain current year', () => {
        const currentYear = new Date().getFullYear() + '';
        render(<Footer/>)
        expect(screen.getByTestId("curr-year")).toHaveTextContent(currentYear)
    })
})