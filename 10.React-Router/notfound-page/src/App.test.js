import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

describe("App renders correctly", () => {
  test("App  renders the NotFound page for unhandled routes", () => {
    window.history.pushState({}, "", "/random-url-123");
    render(<App />);

    const headingEl = screen.getByRole("heading", { name: /page not found./i });
    const imgEl = screen.getByAltText(/not found/i);
    const backBtnEl = screen.getByRole("button", { name: /back to home/i });

    expect(headingEl).toBeInTheDocument();
    expect(imgEl).toBeInTheDocument();
    expect(backBtnEl).toBeInTheDocument();
  });

  test("Clicking on the back button should navigate user to the Home page", async () => {
    user.setup();
    window.history.pushState({}, "", "/random-url-123");
    render(<App />);

    const backBtnEl = screen.getByRole("button", { name: /back to home/i });

    await user.click(backBtnEl);

    const homeHeadingEl = screen.getByRole("heading", {
      name: /rapidretail/i
    });
    const descEl = screen.getByText(
      /Rapid Retail is an ecommerce store that offers/i
    );

    expect(homeHeadingEl).toBeInTheDocument();
    expect(descEl).toBeInTheDocument();
  });
});
