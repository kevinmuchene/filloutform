import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddPageButton from "@/features/Stepper/components/AddPageButton";

describe("AddPageButton component", () => {
  test("renders a button with the correct text and styling", () => {
    const handleClick = jest.fn();
    render(<AddPageButton onClick={handleClick} />);

    const button = screen.getByRole("button", { name: /add page/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      "inline-flex",
      "items-center",
      "px-2",
      "py-2",
      "rounded-lg",
      "border"
    );

    const span = screen.getByText("＋Add page");
    expect(span).toBeInTheDocument();
    expect(span.tagName).toBe("SPAN");
  });

  test("calls onClick when the button is clicked", async () => {
    const handleClick = jest.fn();
    render(<AddPageButton onClick={handleClick} />);

    const button = screen.getByRole("button", { name: /add page/i });
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
