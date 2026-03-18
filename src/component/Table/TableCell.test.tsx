import { render, screen } from "@testing-library/react";
import TableCell from "./TableCell";

describe("TableCell", () => {
  test("renders cell content", () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell>Cell</TableCell>
          </tr>
        </tbody>
      </table>,
    );
    expect(screen.getByText("Cell")).toBeVisible();
  });

  test("renders cell correctly", () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell>Cell</TableCell>
          </tr>
        </tbody>
      </table>,
    );
    const cellElement = screen.getByText("Cell");
    expect(cellElement).toBeInTheDocument();
  });
});
