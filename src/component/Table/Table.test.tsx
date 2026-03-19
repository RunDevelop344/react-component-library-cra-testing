import { render, screen } from "@testing-library/react";
import Table from "./Table";

describe("Table", () => {
  test("renders table content", () => {
    render(
      <Table>
        <tbody>
          <tr>
            <td>Content</td>
          </tr>
        </tbody>
      </Table>,
    );

    expect(screen.getByText("Content")).toBeVisible();
  });

  test("applies disabled style", () => {
    render(
      <Table disabled>
        <tbody>
          <tr>
            <td>Content</td>
          </tr>
        </tbody>
      </Table>,
    );

    const tableElement = screen.getByRole("table");

    expect(tableElement).toHaveStyle("opacity: 0.6");
  });
});
