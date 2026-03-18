import { render, screen } from "@testing-library/react";
import TableFooter from "./TableFooter";
import TableRow from "./TableRow";
import TableCell from "./TableCell";

describe("TableFooter", () => {
  test("renders footer content", () => {
    render(
      <table>
        <TableFooter>
          <TableRow>
            <TableCell>Footer</TableCell>
          </TableRow>
        </TableFooter>
      </table>,
    );
    expect(screen.getByText("Footer")).toBeVisible();
  });

  test("renders footer element", () => {
    render(
      <table>
        <TableFooter>
          <TableRow>
            <TableCell>Footer</TableCell>
          </TableRow>
        </TableFooter>
      </table>,
    );
    const footerCell = screen.getByRole("rowgroup");
    expect(footerCell).toBeInTheDocument();
  });
});
