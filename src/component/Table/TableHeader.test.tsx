import { render, screen } from "@testing-library/react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

describe("TableHeader", () => {
  test("renders header content", () => {
    render(
      <table>
        <thead>
          <TableRow>
            <TableHeader>Header</TableHeader>
          </TableRow>
        </thead>
      </table>,
    );

    expect(screen.getByText("Header")).toBeVisible();
  });

  test("applies correct background color", () => {
    render(
      <table>
        <thead>
          <TableRow>
            <TableHeader>Header</TableHeader>
          </TableRow>
        </thead>
      </table>,
    );

    const headerCell = screen.getByText("Header"); // <th>

    expect(headerCell).toHaveStyle("background-color: rgb(245, 245, 245)");
  });
});
