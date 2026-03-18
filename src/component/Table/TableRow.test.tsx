import { render, screen } from "@testing-library/react";
import TableRow from "./TableRow";
import TableCell from "./TableCell";

describe("TableRow", () => {
  test("renders row content", () => {
    render(
      <table>
        <tbody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </tbody>
      </table>,
    );
    expect(screen.getByText("Cell")).toBeVisible();
  });

  test("row element exists", () => {
    render(
      <table>
        <tbody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </tbody>
      </table>,
    );
    const rowElement = screen.getByRole("row");
    expect(rowElement).toBeInTheDocument();
  });
});
