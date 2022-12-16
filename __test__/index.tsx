import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const headings = screen.getAllByText(/Adroitz/i);

    expect(headings[0]).toBeInTheDocument();
  });
});
