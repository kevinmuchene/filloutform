import React from "react";
import { render, screen } from "@testing-library/react";
import InsertHandle from "@/features/Stepper/components/InsertHandle";
import userEvent from "@testing-library/user-event";

describe("InsertHandle component", () => {
  test("renders a button with correct aria-label and structure", () => {
    const handleClick = jest.fn();
    render(<InsertHandle onClick={handleClick} />);

    const button = screen.getByRole("button", { name: /insert new step/i });
    expect(button).toBeInTheDocument();

    const spans = button.querySelectorAll("span");
    expect(spans).toHaveLength(3);

    const plusSpan = screen.getByText("+");
    expect(plusSpan).toBeInTheDocument();
    expect(plusSpan.tagName).toBe("SPAN");
    expect(plusSpan).toHaveClass("group-hover:inline-flex");
  });

  test("calls onClick when the button is clicked", async () => {
    const handleClick = jest.fn();
    render(<InsertHandle onClick={handleClick} />);

    const button = screen.getByRole("button", { name: /insert new step/i });
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
