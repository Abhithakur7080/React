import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import { render, screen, within } from "@testing-library/react";
import App from "./App";

function waitTimeout(ms) {
  return new Promise((resolve) => setTimeout(() => resolve(true), ms));
}

describe("App renders correctly", () => {
  test("Timer works correctly", async () => {
    user.setup();
    render(<App />);

    const timerLink = within(document.querySelector("nav")).getByText(/timer/i);
    await user.click(timerLink);

    const startBtnEl = screen.getByAltText(/start/i);
    const pauseBtnEl = screen.getByAltText(/pause/i);
    const resetBtnEl = screen.getByAltText(/reset/i);

    await user.click(startBtnEl);
    await waitTimeout(2500);

    const countEl = document.querySelector("b");
    expect(countEl).toHaveTextContent(2);

    await user.click(pauseBtnEl);
    await waitTimeout(2500);

    const pausedCountEl = document.querySelector("b");
    expect(pausedCountEl).toHaveTextContent(2);

    await user.click(resetBtnEl);

    const resetCountEl = document.querySelector("b");
    expect(resetCountEl).toHaveTextContent(0);
  }, 10000);

  test("Counter works correctly", async () => {
    user.setup();
    render(<App />);

    const counterLink = within(document.querySelector("nav")).getByText(
      /counter/i
    );
    await user.click(counterLink);

    const incBtnEl = screen.getByAltText(/inc/i);
    const decBtnEl = screen.getByAltText(/dec/i);
    const resetBtnEl = screen.getByAltText(/reset/i);

    await user.dblClick(incBtnEl);

    const incCountEl = document.querySelector("b");
    expect(incCountEl).toHaveTextContent(2);

    await user.click(decBtnEl);

    const decCountEl = document.querySelector("b");
    expect(decCountEl).toHaveTextContent(1);

    await user.click(resetBtnEl);

    const resetCountEl = document.querySelector("b");
    expect(resetCountEl).toHaveTextContent(0);
  });
});
