import user from "@testing-library/user-event";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

const data = {
  id: 1,
  text: "Alone in the unspoilt wilderness",
  img:
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
};

describe("App renders correctly", () => {
  test("App should update the count when a post is saved", async () => {
    user.setup();
    render(<App />);

    const saveBtn = screen.getAllByAltText(/save/i)[0];

    await user.click(saveBtn);

    const saveCount = within(document.querySelector(".navbar")).getByText(
      /saved posts: 1/i
    );
    expect(saveCount).toBeInTheDocument();
  });

  test("App should reset saved posts when the reset button is clicked", async () => {
    user.setup();
    render(<App />);

    const saveBtn = screen.getAllByAltText(/save/i)[0];

    await user.click(saveBtn);

    const resetButton = screen.getByRole("button", { name: /reset/i });
    await user.click(resetButton);

    const saveCount = within(document.querySelector(".navbar")).getByText(
      /saved posts: 0/i
    );
    expect(saveCount).toBeInTheDocument();
  });

  test("Post is correctly saved inside of list", async () => {
    user.setup();
    render(<App />);

    const saveBtn = screen.getAllByAltText(/save/i)[0];

    await user.click(saveBtn);

    const saveCount = within(document.querySelector(".navbar")).getByText(
      /saved posts: 1/i
    );
    await user.click(saveCount);

    const savedPost = within(document.querySelector(".saved-list")).getByText(
      data.text
    );
    expect(savedPost).toBeInTheDocument();
  });
});
