import { render, screen } from "@testing-library/react";
import TableHeader from "./TableHeader";

describe("TableHeader", () => {
  test("renders header content", () => {
    render(<TableHeader>Header</TableHeader>);
    expect(screen.getByText("Header")).toBeVisible();
  });

  test("applies correct background color", () => {
    render(<TableHeader>Header</TableHeader>);
    const headerElement = screen.getByRole("rowgroup");
    expect(headerElement).toHaveStyle("background-color: #f5f5f5");
  });
});
