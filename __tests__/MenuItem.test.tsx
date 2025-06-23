import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MenuItem from "@/components/Menu/MenuItem";

describe("MenuItem component", () => {
  const label = "Test Action";
  const onClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders label without icon and default styling", () => {
    render(<MenuItem label={label} onClick={onClick} />);

    const button = screen.getByRole("button", { name: label });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(label);
    expect(button).toHaveClass("text-gray-800");
  });

  test("applies danger styling when danger prop is true", () => {
    render(<MenuItem label={label} onClick={onClick} danger />);

    const button = screen.getByRole("button", { name: label });
    expect(button).toHaveClass("text-red-600");
  });

  test("calls onClick when clicked", async () => {
    render(<MenuItem label={label} onClick={onClick} />);

    const button = screen.getByRole("button", { name: label });
    await userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
